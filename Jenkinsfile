pipeline {

    agent any

    stages {

        stage('Build') {
            steps {
                echo 'Build Started'
            }
        }

        stage('Test') {
            steps {
                bat 'if exist index1.html echo Test Passed'
            }
        }

        stage('Deploy') {
            steps {
                bat '''
                if not exist C:\\DeployFolder mkdir C:\\DeployFolder
                xcopy * C:\\DeployFolder\\ /E /Y
                '''
            }
        }
    }

    post {
        success {
            echo 'Deployment Successful'
        }

        failure {
            echo 'Deployment Failed'
        }
    }
}
