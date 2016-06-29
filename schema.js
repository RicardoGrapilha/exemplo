const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validateEmail = function(email) {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
};
/**
 * [UsuarioSchema Esquema de usuários]
 * @type {Schema}
 */
var UsuarioSchema = new Schema({
	nome : {type: String, require:true}
	, email : {type: String, unique:true, require:'Email é obrigatório', validate: [validateEmail, 'Preencha com um email válido']}
	, senha : {type: String, require:true}
	, created : { type: Date, default: Date.now }
});
/**
 * [DadosControle Vai adicionar cada controle inserido]
 * @type {Schema}
 */
const DadosControle = new Schema({
	quantidade: {type: String, require:true}
	, hora: {type: String, require:true}
	, comentario: {type: String, require:true}
});
/**
 * [ControleSchema vai mudando por dia e separado por usuário]
 * @type {Schema}
 */
var ControleSchema = new Schema({
	id_usuario:[{type: Schema.Types.ObjectId, ref:'usuario', require:true}]
	, data : { type: Date}
	, DadosControle: [DadosControle]
	, created : { type: Date, default: Date.now }
});