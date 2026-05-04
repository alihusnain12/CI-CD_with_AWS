node {
    def appDir = "/tmp/nextjs-app"
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
            mkdir -p ${appDir}
            rsync -av --delete --exclude='.git' --exclude='node_modules' ./ ${appDir}/
            cd ${appDir}
            npm install
            npm run build
        """
    }
}
