import React, { Component } from 'react';

class TabelaAlunos extends Component {
  constructor() {
    super();
    this.state = {
      alunos: [
        { id: 1, nome: 'Jefferson', uc: 'UC 1', aprovado: null },
        { id: 2, nome: 'Jackson', uc: 'UC 1', aprovado: null },
        { id: 3, nome: 'Yuri', uc: 'UC 1', aprovado: null },
        { id: 4, nome: 'Pedro', uc: 'UC 1', aprovado: null }
      ],
      registrosAnteriores: {}
    };
  }

  registrarAprovacao = (alunoId, status) => {
    const { alunos } = this.state;
    const alunoIndex = alunos.findIndex(aluno => aluno.id === alunoId);
    if (alunoIndex !== -1) {
      const updatedAlunos = [...alunos];
      const registroAnterior = { ...updatedAlunos[alunoIndex] };
      updatedAlunos[alunoIndex].aprovado = status;
      const novosRegistrosAnteriores = { ...this.state.registrosAnteriores };
      novosRegistrosAnteriores[alunoId] = registroAnterior;
      this.setState({ alunos: updatedAlunos, registrosAnteriores: novosRegistrosAnteriores });
    }
  }

  desfazerRegistro = (alunoId) => {
    const { registrosAnteriores } = this.state;
    if (registrosAnteriores[alunoId]) {
      const { alunos } = this.state;
      const alunoIndex = alunos.findIndex(aluno => aluno.id === alunoId);
      if (alunoIndex !== -1) {
        const updatedAlunos = [...alunos];
        updatedAlunos[alunoIndex] = registrosAnteriores[alunoId];
        const novosRegistrosAnteriores = { ...registrosAnteriores };
        delete novosRegistrosAnteriores[alunoId];
        this.setState({ alunos: updatedAlunos, registrosAnteriores: novosRegistrosAnteriores });
      }
    }
  }

  render() {
    const { alunos, registrosAnteriores } = this.state;

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Nome do Aluno</th>
              <th>Unidade Curricular</th>
              <th>Aprovado?</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            {alunos.map(aluno => (
              <tr key={aluno.id}>
                <td>{aluno.nome}</td>
                <td>{aluno.uc}</td>
                <td>{aluno.aprovado !== null ? (aluno.aprovado ? 'Aprovado' : 'Reprovado') : ''}</td>
                <td>
                  {aluno.aprovado === null ? (
                    <div>
                      <button onClick={() => this.registrarAprovacao(aluno.id, true)}>Aprovar</button>
                      <button onClick={() => this.registrarAprovacao(aluno.id, false)}>Reprovar</button>
                    </div>
                  ) : (
                    <div>
                      <button onClick={() => this.desfazerRegistro(aluno.id)}>Refazer</button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className='confirm-btt'> Confirmar </button>
      </div>
    );
  }
}

export default TabelaAlunos;
