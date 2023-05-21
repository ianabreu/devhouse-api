/* metodos: 
index: Listagem de sessoes, 
show: Listar UNICA sessao, 
update: Alterar alguma sessao, 
store: Criar uma sessao, 
destroy: Deletar uma sessao,
*/
import User from '../models/User';


class SessionController {
    async store(req, res) {
        const { email } = req.body;
        let user = await User.findOne({ email })

        if (!user) {
            user = await User.create({ email })
        }
        
        return res.json(user)
    }

}
export default new SessionController();