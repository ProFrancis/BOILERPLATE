import mongoose from 'mongoose'

const connectDB = (mongoURL, dbName) => {
    mongoose.connect(mongoURL, {dbName: dbName })
        .then(() => console.log('Connexion à MongoDB réussie !'))
        .catch((error) => console.error('Erreur de connexion à MongoDB :', error));
};

export default connectDB;