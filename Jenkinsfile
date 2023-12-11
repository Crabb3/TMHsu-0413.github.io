pipeline {
    agent {
        any {
            image 'node:20.10.0-alpine3.1i'
            args '-p 3000:3000'
        }
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
    }
}
