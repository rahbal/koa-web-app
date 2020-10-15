pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }

    stage('audit') {
      steps {
        sh 'npm audit fix'
      }
    }

    stage('Deploy') {
      steps {
        sh 'npm start'
      }
    }

  }
}