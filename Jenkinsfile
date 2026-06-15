pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Getting source code from repository...'
                checkout scm
            }
        }

        stage('Build') {
            steps {
                echo 'Building website...'
            }
        }

        stage('Test') {
            steps {
                echo 'Testing website files...'
                sh 'ls -la'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying website...'

                sh '''
                sudo mkdir -p /var/www/html/bankapp
                sudo cp -r * /var/www/html/bankapp/
                '''
            }
        }
    }

    post {
        success {
            echo 'Website deployed successfully!'
        }

        failure {
            echo 'Deployment failed!'
        }
    }
}