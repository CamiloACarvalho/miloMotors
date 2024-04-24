# Use uma imagem base
FROM node:latest

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app/front-end

# Copie o arquivo package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o resto do código para o diretório de trabalho
COPY . /app/front-end

# Exponha a porta em que o aplicativo irá rodar
EXPOSE 3001

# Define o comando de inicialização padrão
ENTRYPOINT ["npm"]