pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
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
                bat 'dir'
            }
        }

        stage('Deploy') {
            steps {
                bat '''
                if not exist C:\\deploy\\bankapp mkdir C:\\deploy\\bankapp
                copy index1.html C:\\deploy\\bankapp
                copy style1.css C:\\deploy\\bankapp
                copy script1.js C:\\deploy\\bankapp
                '''
            }
        }
    }

    post {
        success {
            echo 'Deployment successful!'
        }

        failure {
            echo 'Deployment failed!'
        }
    }
}
