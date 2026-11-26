const db = require('../db')

const listar = (req, res) => {
    db.query('SELECT * FROM usoia', (error, rows) => {
        if (error) {
            return res.status(500).json({ erro: error.message });
        }
        res.json(rows);
    });
};

const cadastrar = (req, res) =>{
    const {sistema, tipo, finalidade, tecnologia, nivelRisco, revisaoHumana} = req.body
    db.query(
        'INSERT INTO usoia (sistema, tipo, finalidade, tecnologia, nivelRisco, revisaoHumana) VALUE (?,?,?,?,?,?)',
        [sistema, tipo, finalidade, tecnologia, nivelRisco, revisaoHumana],
        (error, result) => {
            if (error) {
                return res.status(400).json({ erro: error.message });
            }
            res.status(201).json({ id: result.insertId, mensagem: 'Cadastrado com sucesso!' });
        }
        )
}
const atualizar = (req, res)=>{
    const {id} = req.params
    const {sistema, tipo, finalidade, tecnologia, nivelRisco, revisaoHumana} = req.body;

    db.query(
        'UPDATE usoia SET sistema = ?, tipo = ?, finalidade = ?, tecnologia = ?, nivelRisco = ?, revisaoHumana = ? WHERE id = ?',
        [sistema, tipo, finalidade, tecnologia, nivelRisco, revisaoHumana, id],
        (error, result) => {
            if (error) {
                return res.status(400).json({ erro: error.message });
            }
            if (result.affectedRows === 0) {
                return res.status(404).json({ erro: 'Uso não encontrado' });
            }
            res.json({ mensagem: 'Atualizado com sucesso!' });
        }
    );
}
const excluir = (req, res) => {
  const { id } = req.params;

  db.query('DELETE FROM usoia WHERE id = ?', [id], (error, result) => {
    if (error) {
      return res.status(500).json({ erro: error.message });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ erro: 'Uso de ia não encontrado' });
    }
    res.json({ mensagem: 'Excluído com sucesso!' });
  });
};

    
module.exports = { listar, cadastrar, atualizar, excluir }