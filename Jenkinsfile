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
    sh """
        sudo mkdir -p ${appDir}
        sudo chown -R jenkins:jenkins ${appDir}
        rsync -av --delete --exclude='.git' --exclude='node_modules' ./ ${appDir}/
        cd ${appDir}
        npm install
        npm run build
        # Use PM2 to restart the app in the background
        pm2 restart next-app || pm2 start npm --name "next-app" -- start
    """
}
}
