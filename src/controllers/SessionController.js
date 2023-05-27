/* metodos:
index: Listagem de sessoes,
show: Listar UNICA sessao,
update: Alterar alguma sessao,
store: Criar uma sessao,
destroy: Deletar uma sessao,
*/
import * as Yup from 'yup';
import User from '../models/User';

class SessionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
    });

    const { email } = req.body;
    let user = await User.findOne({ email });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Falha na validação' });
    }

    if (!user) {
      user = await User.create({ email });
    }

    return res.json(user);
  }
}
export default new SessionController();
