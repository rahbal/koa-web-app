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
        sh 'sh \'npm audit fix\''
      }
    }

    stage('Deploy') {
      steps {
        sh 'sh \'npm start\''
      }
    }

  }
}