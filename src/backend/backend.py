from flask import Flask, request, jsonify
from flask_restful import Resource, Api
from sqlalchemy import create_engine
from json import dumps
from flask_cors import CORS, cross_origin

#Precisa instalar os 4 pacotes: clica em packages e digita o nome do pacote
#Flask
#Flask-SQLAlchemy
#Flask-Restful
#Jsonify

# Conectando ao BD exemplo feito em SQLLITE
db_connect = create_engine('sqlite:///sqlite.db')

##Coloca o servidor Web no ar
app = Flask(__name__)
cors = CORS(app)
api = Api(app)


class ciclos(Resource):

  def get(self):  # Mostra todos os usuários cadastrados no BD
    conn = db_connect.connect()
    query = conn.execute("select * from ciclo")
    result = [dict(zip(tuple(query.keys()), i)) for i in query.cursor]
    return jsonify(result)

  def post(self):  # Inclui no BD um usuário passado como parâmetro
    conn = db_connect.connect()
    cicID = request.json['cicID']
    cicDesc = request.json['cicDesc']

    conn.execute("insert into ciclo values({0}, '{1}')".format(
      int(cicID), str(cicDesc)))

    query = conn.execute('select * from ciclo order by cicID desc limit 1')
    result = [dict(zip(tuple(query.keys()), i)) for i in query.cursor]
    return jsonify(result)

  def put(
      self):  # Update*(atualizar) no BD de um usuário passado como parâmetro
    conn = db_connect.connect()
    cicID = request.json['cicID']
    cicDesc = request.json['cicDesc']

    conn.execute("update ciclo set cicDesc ='%s'" % str(cicDesc) +
                 "  where cicID =%d " % int(cicID))

    query = conn.execute("select * from ciclo where cicID=%d " % int(cicID))
    result = [dict(zip(tuple(query.keys()), i)) for i in query.cursor]
    return jsonify(result)


class cicloBycicID(Resource
                   ):  # Deleta no BD de um usuário passado como parâmetro

  def delete(self, cicID):
    conn = db_connect.connect()
    conn.execute("delete from ciclo where cicID=%d " % int(cicID))
    return {"status": "success"}

  def get(self, cicID):
    conn = db_connect.connect()
    query = conn.execute("select * from ciclo where cicID =%d " % int(cicID))
    result = [dict(zip(tuple(query.keys()), i)) for i in query.cursor]
    return jsonify(result)


api.add_resource(ciclos, '/ciclos')
api.add_resource(cicloBycicID, '/ciclos/<cicID>')


class Grupos(Resource):

  def get(self):  # Mostra todos os usuários cadastrados no BD
    conn = db_connect.connect()
    query = conn.execute("select * from grupo")
    result = [dict(zip(tuple(query.keys()), i)) for i in query.cursor]
    return jsonify(result)

  def post(self):  # Inclui no BD um usuário passado como parâmetro
    conn = db_connect.connect()
    grpID = request.json['grpID']
    cicID = request.json['cicID']
    grpDesc = request.json['grpDesc']

    conn.execute("insert into grupo values({0}, {1},'{2}')".format(
      int(grpID), int(cicID), str(grpDesc)))

    query = conn.execute('select * from grupo order by grpID desc limit 1')
    result = [dict(zip(tuple(query.keys()), i)) for i in query.cursor]
    return jsonify(result)

  def put(
      self):  # Update*(atualizar) no BD de um usuário passado como parâmetro
    conn = db_connect.connect()
    grpID = request.json['grpID']
    cicID = request.json['cicID']
    grpDesc = request.json['grpDesc']

    conn.execute("update grupo set cicID =%d " % int(cicID) + ", grpDesc ='" +
                 str(grpDesc) + "'  where grpID =%d " % int(grpID))

    query = conn.execute("select * from grupo where grpID=%d " % int(grpID))
    result = [dict(zip(tuple(query.keys()), i)) for i in query.cursor]
    return jsonify(result)


class grupoById(Resource):  # Deleta no BD de um usuário passado como parâmetro

  def delete(self, grpID):
    conn = db_connect.connect()
    conn.execute("delete from grupo where grpID=%d " % int(grpID))
    return {"status": "success"}

  def get(self, grpID):
    conn = db_connect.connect()
    query = conn.execute("select * from grupo where grpID =%d " % int(grpID))
    result = [dict(zip(tuple(query.keys()), i)) for i in query.cursor]
    return jsonify(result)


api.add_resource(Grupos, '/grupos')
api.add_resource(grupoById, '/grupos/<grpID>')


class palavra_grupos(Resource):

  def get(self):  # Mostra todos os usuários cadastrados no BD
    conn = db_connect.connect()
    query = conn.execute("select * from palavra_grupo")
    result = [dict(zip(tuple(query.keys()), i)) for i in query.cursor]
    return jsonify(result)

  def post(self):  # Inclui no BD um usuário passado como parâmetro
    conn = db_connect.connect()
    plvID = request.json['plvID']
    grpID = request.json['grpID']

    conn.execute("insert into palavra_grupo values({0}, {1})".format(
      int(plvID), int(grpID)))

    query = conn.execute(
      'select * from palavra_grupo order by plvID desc limit 1')
    result = [dict(zip(tuple(query.keys()), i)) for i in query.cursor]
    return jsonify(result)

  def put(
      self):  # Update*(atualizar) no BD de um usuário passado como parâmetro
    conn = db_connect.connect()
    plvID = request.json['plvID']
    grpID = request.json['grpID']

    conn.execute("update palavra_grupo set grpID =%d" % int(grpID) +
                 "  where plvID =%d " % int(plvID))

    query = conn.execute("select * from palavra_grupo where plvID=%d " %
                         int(plvID))
    result = [dict(zip(tuple(query.keys()), i)) for i in query.cursor]
    return jsonify(result)


class palavra_grupoByplvID(
    Resource):  # Deleta no BD de um usuário passado como parâmetro

  def delete(self, plvID):
    conn = db_connect.connect()
    conn.execute("delete from palavra_grupo where plvID=%d " % int(plvID))
    return {"status": "success"}

  def get(self, plvID):
    conn = db_connect.connect()
    query = conn.execute("select * from palavra_grupo where plvID =%d " %
                         int(plvID))
    result = [dict(zip(tuple(query.keys()), i)) for i in query.cursor]
    return jsonify(result)


api.add_resource(palavra_grupos, '/palavra_grupos')
api.add_resource(palavra_grupoByplvID, '/palavra_grupos/<plvID>')


class Palavras(Resource):

  def get(self):  # Mostra todos os usuários cadastrados no BD
    conn = db_connect.connect()
    query = conn.execute("select * from palavra")
    result = [dict(zip(tuple(query.keys()), i)) for i in query.cursor]
    return jsonify(result)

  def post(self):  # Inclui no BD um usuário passado como parâmetro
    conn = db_connect.connect()
    plvID = request.json['plvID']
    plvNome = request.json['plvNome']
    plvclasse = request.json['plvClasse']
    plvSgn = request.json['plvSgn']
    dicID = request.json['dicID']

    conn.execute(
      "insert into palavra values({0},'{1}','{2}','{3}',{4})".format(
        int(plvID), plvNome, plvclasse, plvSgn, int(dicID)))

    query = conn.execute('select * from palavra order by plvID desc limit 1')
    result = [dict(zip(tuple(query.keys()), i)) for i in query.cursor]
    return jsonify(result)

  def put(
      self):  # Update*(atualizar) no BD de um usuário passado como parâmetro
    conn = db_connect.connect()
    plvID = request.json['plvID']
    plvNome = request.json['plvNome']
    plvclasse = request.json['plvclasse']
    plvSgn = request.json['plvSgn']
    dicID = request.json['dicID']

    conn.execute("update palavra set plvNome ='" + str(plvNome) +
                 "', plvclasse ='" + str(plvclasse) + "', plvSgn ='" +
                 str(plvSgn) + "', dicID =" + int(dicID) +
                 "  where plvID =%d " % int(plvID))

    query = conn.execute("select * from palavra where plvID=%d " % int(plvID))
    result = [dict(zip(tuple(query.keys()), i)) for i in query.cursor]
    return jsonify(result)


class palavraByplvID(Resource
                     ):  # Deleta no BD de um usuário passado como parâmetro

  def delete(self, plvID):
    conn = db_connect.connect()
    conn.execute("delete from palavra where plvID=%d " % int(plvID))
    return {"status": "success"}

  def get(self, plvID):
    conn = db_connect.connect()
    query = conn.execute("select * from palavra where plvID =%d " % int(plvID))
    result = [dict(zip(tuple(query.keys()), i)) for i in query.cursor]
    return jsonify(result)


api.add_resource(Palavras, '/palavras')
api.add_resource(palavraByplvID, '/palavras/<plvID>')


class pergunta_grupo(Resource):

  def get(self):  # Mostra todos os usuários cadastrados no BD
    conn = db_connect.connect()
    query = conn.execute("select * from pergunta_grupo")
    result = [dict(zip(tuple(query.keys()), i)) for i in query.cursor]
    return jsonify(result)

  def post(self):  # Inclui no BD um usuário passado como parâmetro
    conn = db_connect.connect()
    pgtID = request.json['pgtID']
    grpID = request.json['grpID']

    conn.execute("insert into pergunta_grupo values({0}, {1})".format(
      int(pgtID), int(grpID)))

    query = conn.execute(
      'select * from pergunta_grupo order by pgtID desc limit 1')
    result = [dict(zip(tuple(query.keys()), i)) for i in query.cursor]
    return jsonify(result)

  def put(
      self):  # Update*(atualizar) no BD de um usuário passado como parâmetro
    conn = db_connect.connect()
    pgtID = request.json['pgtID']
    grpID = request.json['grpID']

    conn.execute("update pergunta_grupo set grpID =%d" % int(grpID) +
                 "  where pgtID =%d " % int(pgtID))

    query = conn.execute("select * from pergunta_grupo where pgtID=%d " %
                         int(pgtID))
    result = [dict(zip(tuple(query.keys()), i)) for i in query.cursor]
    return jsonify(result)


class pergunta_grupoBypgtID(
    Resource):  # Deleta no BD de um usuário passado como parâmetro

  def delete(self, pgtID):
    conn = db_connect.connect()
    conn.execute("delete from pergunta_grupo where pgtID=%d " % int(pgtID))
    return {"status": "success"}

  def get(self, pgtID):
    conn = db_connect.connect()
    query = conn.execute("select * from pergunta_grupo where pgtID =%d " %
                         int(pgtID))
    result = [dict(zip(tuple(query.keys()), i)) for i in query.cursor]
    return jsonify(result)


api.add_resource(pergunta_grupo, '/pergunta_grupo')
api.add_resource(pergunta_grupoBypgtID, '/pergunta_grupo/<pgtID>')


class Perguntas(Resource):

  def get(self):  # Mostra todos os usuários cadastrados no BD
    conn = db_connect.connect()
    query = conn.execute("select * from pergunta")
    result = [dict(zip(tuple(query.keys()), i)) for i in query.cursor]
    return jsonify(result)

  def post(self):  # Inclui no BD um usuário passado como parâmetro
    conn = db_connect.connect()
    pgtID = request.json['pgtID']
    pgtDes = request.json['pgtDes']
    pgtRes = request.json['pgtRes']
    pgtAltFls1 = request.json['pgtAltFls1']
    pgtAltFls2 = request.json['pgtAltFls2']
    pgtAltFls3 = request.json['pgtAltFls3']
    pgtTipo = request.json['pgtTipo']
    pgtDif = request.json['pgtDif']

    conn.execute(
      "insert into pergunta values( {0},'{1}','{2}','{3}','{4}','{5}','{6}','{7}')"
      .format(pgtID, pgtDes, pgtRes, pgtAltFls1, pgtAltFls2, pgtAltFls3,
              pgtTipo, pgtDif))

    query = conn.execute('select * from pergunta order by pgtID desc limit 1')
    result = [dict(zip(tuple(query.keys()), i)) for i in query.cursor]
    return jsonify(result)

  def put(
      self):  # Update*(atualizar) no BD de um usuário passado como parâmetro
    conn = db_connect.connect()
    pgtID = request.json['pgtID']
    pgtDes = request.json['pgtDes']
    pgtRes = request.json['pgtRes']
    pgtAltFls1 = request.json['pgtAltFls1']
    pgtAltFls2 = request.json['pgtAltFls2']
    pgtAltFls3 = request.json['pgtAltFls3']
    pgtTipo = request.json['pgtTipo']
    pgtDif = request.json['pgtDif']

    conn.execute("update pergunta set pgtDes ='" + str(pgtDes) +
                 "', pgtRes ='" + str(pgtRes) + "', pgtAltFls1 ='" +
                 str(pgtAltFls1) + "', pgtAltFls2 ='" + str(pgtAltFls2) +
                 "', pgtAltFls3 ='" + str(pgtAltFls3) + "', pgtTipo ='" +
                 str(pgtTipo) + "', pgtDif ='" + str(pgtDif) +
                 "'  where pgtID =%d " % int(pgtID))

    query = conn.execute("select * from pergunta where pgtID=%d " % int(pgtID))
    result = [dict(zip(tuple(query.keys()), i)) for i in query.cursor]
    return jsonify(result)


class perguntaBypgtID(Resource
                      ):  # Deleta no BD de um usuário passado como parâmetro

  def delete(self, pgtID):
    conn = db_connect.connect()
    conn.execute("delete from pergunta where pgtID=%d " % int(pgtID))
    return {"status": "success"}

  def get(self, pgtID):
    conn = db_connect.connect()
    query = conn.execute("select * from pergunta where pgtID =%d " %
                         int(pgtID))
    result = [dict(zip(tuple(query.keys()), i)) for i in query.cursor]
    return jsonify(result)


api.add_resource(Perguntas, '/perguntas')
api.add_resource(perguntaBypgtID, '/perguntas/<pgtID>')


class usuario_ciclos(Resource):

  def get(self):  # Mostra todos os usuários cadastrados no BD
    conn = db_connect.connect()
    query = conn.execute("select * from usuario_ciclo")
    result = [dict(zip(tuple(query.keys()), i)) for i in query.cursor]
    return jsonify(result)

  def post(self):  # Inclui no BD um usuário passado como parâmetro
    conn = db_connect.connect()
    userID = request.json['userID']
    cicID = request.json['cicID']
    situacao = request.json['situacao']

    conn.execute("insert into usuario_ciclo values({0},{1},'{2}')".format(
      userID, int(cicID), situacao))

    query = conn.execute(
      'select * from usuario_ciclo order by userID desc limit 1')
    result = [dict(zip(tuple(query.keys()), i)) for i in query.cursor]
    return jsonify(result)

  def put(
      self):  # Update*(atualizar) no BD de um usuário passado como parâmetro
    conn = db_connect.connect()
    userID = request.json['userID']
    cicID = request.json['cicID']
    situacao = request.json['situacao']

    conn.execute("update usuario_ciclo set cicID =%d" % int(cicID) +
                 ", situacao ='" + str(situacao) +
                 "'  where userID = %d " % int(userID))

    query = conn.execute("select * from usuario_ciclo where userID= %d " %
                         int(userID))
    result = [dict(zip(tuple(query.keys()), i)) for i in query.cursor]
    return jsonify(result)


class usuario_cicloByuserID(
    Resource):  # Deleta no BD de um usuário passado como parâmetro

  def delete(self, userID):
    conn = db_connect.connect()
    conn.execute("delete from usuario_ciclo where userID= %d " % int(userID))
    return {"status": "success"}

  def get(self, userID):
    conn = db_connect.connect()
    query = conn.execute("select * from usuario_ciclo where userID = %d " %
                         int(userID))
    result = [dict(zip(tuple(query.keys()), i)) for i in query.cursor]
    return jsonify(result)


api.add_resource(usuario_ciclos, '/usuario_ciclos')
api.add_resource(usuario_cicloByuserID, '/usuario_ciclos/<userID>')


class Usuarios(Resource):

  def get(self):  # Mostra todos os usuários cadastrados no BD
    conn = db_connect.connect()
    query = conn.execute("select * from usuario")
    result = [dict(zip(tuple(query.keys()), i)) for i in query.cursor]
    return jsonify(result)

  def post(self):  # Inclui no BD um usuário passado como parâmetro
    conn = db_connect.connect()
    email = request.json['email']
    nome = request.json['nome']
    senha = request.json['senha']

    conn.execute("INSERT INTO usuario (email, nome, senha) VALUES (?, ?, ?)", (email, nome, senha))


    query = conn.execute('select * from usuario order by userID desc limit 1')
    result = [dict(zip(tuple(query.keys()), i)) for i in query.cursor]
    return jsonify(result)

  def put(
      self):  # Update*(atualizar) no BD de um usuário passado como parâmetro
    conn = db_connect.connect()
    email = request.json['email']
    nome = request.json['nome']
    senha = request.json['senha']

    conn.execute("update usuario set nome ='" + str(nome) + "', senha ='" +
                 str(senha) + "', email ='" + str(email) +
                 "' where userID = %d " % int(userID))

    query = conn.execute("select * from usuario where userID= %d " %
                         int(userID))
    result = [dict(zip(tuple(query.keys()), i)) for i in query.cursor]
    return jsonify(result)


class usuarioByuserID(Resource
                      ):  # Deleta no BD de um usuário passado como parâmetro

  def delete(self, userID):
    conn = db_connect.connect()
    conn.execute("delete from usuario where userID= %d " % int(userID))
    return {"status": "success"}

  def get(self, userID):
    conn = db_connect.connect()
    query = conn.execute("select * from usuario where userID = %d " %
                         int(userID))
    result = [dict(zip(tuple(query.keys()), i)) for i in query.cursor]
    return jsonify(result)


api.add_resource(Usuarios, '/usuarios')
api.add_resource(usuarioByuserID, '/usuarios/<userID>')

if __name__ == '__main__':
  app.run(host='0.0.0.0')