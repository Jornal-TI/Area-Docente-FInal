import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './styleFeed.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function Feed(props) {
    const { category, title, date, author, content } = props;
    const [showModal, setShowModal] = useState(false);
    const [showComments, setShowComments] = useState(false);
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);
    const [user] = useState({ displayName: 'Carlos José Ferreira' });
    const [reverseOrder, setReverseOrder] = useState(false);
    const [isFavorited, setIsFavorited] = useState(false);

    const handleClose = () => {
        setShowModal(false);
        setShowComments(false);
        setComment('');
    };

    const handleShow = () => setShowModal(true);

    const handleCommentChange = (e) => {
        const newComment = e.target.value;
        if (newComment.length <= 200) {
            setComment(newComment);
        }
    };

    const handleCommentSubmit = () => {
        if (comment !== '') {
            const newComment = {
                text: comment,
                author: user.displayName,
                timestamp: new Date().toLocaleString(),
            };
            setComments([...comments, newComment]);
            setComment('');
        }
    };

    const toggleCommentOrder = () => {
        setReverseOrder(!reverseOrder);
    };

    const toggleFavorite = () => {
        setIsFavorited(!isFavorited);
    };

    const sortedComments = reverseOrder ? [...comments].reverse() : comments;

    return (
        <div>
            <Card className="custom-feed-border">
                <Card.Header as="h6">{category}</Card.Header>
                <Card.Body>
                    <Card.Title>
                        {title}
                        <button
                            className={`favorite-button ${isFavorited ? 'favorited' : ''}`}
                            onClick={toggleFavorite}
                        >
                            <FontAwesomeIcon
                                icon={faStar}
                                className={isFavorited ? 'favorited-icon' : 'unfavorited-icon'}
                                />
                        </button>
                    </Card.Title>
                    <p>Data de Publicação: {date}</p>
                    <p>Autor: {author}</p>
                    <Card.Text>
                        {content.length > 150 ? `${content.substring(0, 150)}...` : content}
                    </Card.Text>
                    <Button variant="primary" onClick={handleShow}>
                        Leia Mais
                    </Button>
                </Card.Body>

                <Modal show={showModal} onHide={handleClose} dialogClassName="modal-90w"
                    keyboard={false} backdrop="static" aria-labelledby="example-custom-modal-styling-title">
                    <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">{title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="d-flex flex-column">
                        <div className="me-2">
                            <p>Data de Publicação: {date}</p>
                            <p>Autor: {author}</p>
                        </div>
                        <div>
                            {content}
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Fechar
                        </Button>
                        <Button variant="primary" onClick={() => setShowComments(!showComments)}>
                            Comentários
                        </Button>

                    </Modal.Footer>
                    {showComments && (
                        <div className="comments-section">
                            <h3>Comentários</h3>
                            <textarea className='txt-comentarios'
                                value={comment}
                                onChange={handleCommentChange}
                                maxLength={200}
                                placeholder="Digite seu comentário (limite de 200 caracteres)"
                                rows={4}
                            />
                            <p>Caracteres restantes: {200 - comment.length}</p>
                            <button onClick={handleCommentSubmit}>Enviar Comentário</button>
                            <br />
                            <br />
                            <br />
                            <Button className="toggle-order-button" variant="info" onClick={toggleCommentOrder}>
                                Alternar Ordem
                            </Button>

                            {sortedComments.map((commentItem, index) => (
                                <div key={index}>
                                    <p>
                                        {commentItem.text}
                                    </p>
                                    <p className='autordatahora'>{commentItem.author} - {commentItem.timestamp}</p>
                                    {index < comments.length - 1 && <div className="comment-divider"></div>}
                                </div>
                            ))}
                        </div>
                    )}
                </Modal>
            </Card>
        </div>
    );
}