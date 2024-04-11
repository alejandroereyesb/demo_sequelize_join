const Autores = require('./autores');
const Entradas = require('./entradas');

//Declara la relación ente las dos tablas. Las relaciones son siempre recíprocas.
//as es un alias para la relación, este alias se usará luego en la query.
Autores.hasMany(Entradas, { foreignKey: 'idAuthor', as: "entradas" });//{foreignKey:'id_author'} works as well 
Entradas.belongsTo(Autores, { foreignKey: 'idAuthor' });