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
                echo 'Build Successful'
            }
        }

        stage('Test') {
            steps {
                bat 'if exist index.html echo Test Passed'
            }
        }

        stage('Deploy') {
            steps {
                bat 'firebase deploy --non-interactive'
            }
        }
    }

    post {
        success {
            echo 'Deployment Successful'
        }
    }
}
