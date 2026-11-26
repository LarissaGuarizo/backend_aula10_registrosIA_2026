const db = require('../db');

const listar = (req, res) => {
    db.query('SELECT * FROM usuario', (error, rows) => {
        if (error) {
            return res.status(500).json({ erro: error.message });
        }
        res.json(rows);
    });
};

const cadastrar = (req, res) => {
    const { nome, email, senha } = req.body;
    db.query(
        'INSERT INTO usuario (nome, email, senha) VALUES (?, ?, ?)',
        [nome, email, senha],
        (error, result) => {
            if (error) {
                return res.status(400).json({ erro: error.message });
            }
            res.status(201).json({ id: result.insertId, mensagem: 'Cadastrado com sucesso!' });
        }
    );
};
const atualizar = (req, res) => {
    const { id } = req.params;
    const { nome, email, senha } = req.body;

    db.query(
        'UPDATE usuario SET nome = ?, email = ?, senha = ? WHERE id = ?',
        [nome, email, senha, id],
        (error, result) => {
            if (error) {
                return res.status(400).json({ erro: error.message });
            }
            if (result.affectedRows === 0) {
                return res.status(404).json({ erro: 'Usuario não encontrado' });
            }
            res.json({ mensagem: 'Atualizado com sucesso!' });
        }
    );
    }
    const excluir = (req, res)=>{
        
        const { id } = req.params;
        db.query('DELETE FROM usoia WHERE id = ?', [id], (error, result) => {
    if (error) {
            return res.status(404).json({ erro: 'Usuario não encontrado' });
        }
        if (result.affectedRows === 0) {
      return res.status(404).json({ erro: 'Uso de ia não encontrado' });
    }
    res.json({ mensagem: 'Excluído com sucesso!' });
  });
}
    


module.exports = { listar, cadastrar, atualizar, excluir };
