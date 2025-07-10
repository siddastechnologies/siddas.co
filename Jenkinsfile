
pipeline {
    agent any

    environment {
        // Ensures Node.js and npm are available in the pipeline's PATH
        // Assumes Node.js is installed globally on the Jenkins agent
        PATH = "/usr/local/bin:${env.PATH}"
        // The user and host for your production server
        REMOTE_SERVER = 'root@siddas.co'
        // The path to your application on the production server
        APP_PATH = '/var/www/siddas.co'
        // The name of the application in PM2
        PM2_APP_NAME = 'siddas-co'
    }

    stages {
        stage('Checkout') {
            steps {
                // Clones the repository from the 'master' branch
                git branch: 'master', url: 'https://github.com/siddastechnologies/siddas.co.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Installs the project dependencies based on package.json
                sh 'npm install'
            }
        }

        stage('Build Application') {
            steps {
                // Creates a production-ready build of the Next.js app
                sh 'npm run build'
            }
        }

        stage('Deploy to Production') {
            steps {
                script {
                    // This command uses the SSH Agent plugin in Jenkins.
                    // 'jenkins-ssh-key' should be the ID of your SSH private key credential in Jenkins.
                    sshagent(credentials: ['jenkins-ssh-key']) {
                        sh """
                            ssh -o StrictHostKeyChecking=no ${REMOTE_SERVER} << 'ENDSSH'
                                echo "--> Changing to application directory"
                                cd ${APP_PATH}

                                echo "--> Pulling latest code from GitHub"
                                git pull origin master

                                echo "--> Installing/updating dependencies"
                                npm install

                                echo "--> Building the application for production"
                                npm run build

                                echo "--> Restarting the application with PM2"
                                pm2 restart ${PM2_APP_NAME}

                                echo "--> Deployment complete!"
                            ENDSSH
                        """
                    }
                }
            }
        }
    }

    post {
        always {
            // Cleans up the workspace after the build is complete
            cleanWs()
        }
    }
}
