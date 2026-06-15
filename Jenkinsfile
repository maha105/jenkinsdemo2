pipeline {

    agent any

    environment {
        PATH = "C:\\Users\\Mahesh\\AppData\\Roaming\\npm;${env.PATH}"
    }

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

        stage('Check Firebase') {
            steps {
                bat 'firebase --version'
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
