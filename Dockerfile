# Utilise l'image Node.js comme base
FROM node:14

# Définit le répertoire de travail dans le conteneur
WORKDIR /app

# Copie le package.json et le package-lock.json dans le conteneur
COPY package*.json  yarn.lock ./

# Installe les dépendances
RUN npm install

# Copie le reste des fichiers du projet dans le conteneur
COPY . .

# Expose le port 3000 (celui utilisé par React)
EXPOSE 3000

# Commande pour démarrer l'application React
CMD ["npm", "start"]
