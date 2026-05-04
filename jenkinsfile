node {
    def appDir = "/var/www/nextjs-app"
    stage("Clean Workspace") {
        echo "Cleaning workspace..."
        deleteDir()
    }
    stage("Clone Repository") {
        echo "Cloning repository..."
        git url: 'https://github.com/alihusnain12/CI-CD_with_AWS', branch: 'main'
    }
    stage("Deploy to EC2") {
        echo "Deploying to EC2..."
       sh """
           sudo mkdir -p ${appDir}
           sudo chown -R jenkins:jenkins ${appDir}
           rsync -av --delete --exclude='.git' --exclude='node_modules' ./ ${appDir}/
           cd ${appDir}
           sudo npm install
           sudo npm run build
           sudo fuser -k 3000/tcp || true
           npm run start
       """
    }
}
