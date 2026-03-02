const { onValueCreated } = require("firebase-functions/v2/database");
const admin = require("firebase-admin");
const axios = require("axios");

admin.initializeApp();

exports.notificarNovoAviso = onValueCreated(
  "/avisos_semanais/{avisoId}",
  async (event) => {
    const snapshot = event.data;

    if (!snapshot) return null;

    const novoAviso = snapshot.val();
    const tituloAviso = novoAviso?.titulo || "Novo Aviso!";

    try {
      const tokensSnapshot = await admin
        .database()
        .ref("/tokens_notificacao")
        .once("value");

      const tokensData = tokensSnapshot.val();

      if (!tokensData) return null;

      const mensagens = [];

      Object.values(tokensData).forEach((item) => {
        if (item.pushToken) {
          mensagens.push({
            to: item.pushToken,
            sound: "default",
            title: "📍 " + tituloAviso,
            body: "Confira o novo informativo da Paróquia!",
            data: { screen: "AvisosSemanais" },
          });
        }
      });

      if (mensagens.length > 0) {
        await axios.post(
          "https://exp.host/--/api/v2/push/send",
          mensagens
        );
      }

      console.log("Notificações enviadas com sucesso!");
    } catch (error) {
      console.error("Erro ao enviar notificações:", error);
    }

    return null;
  }
);