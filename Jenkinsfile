pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }

    stage('Deploy') {
      steps {
        sh 'sh \'npm start\''
      }
    }

    stage('fix') {
      steps {
        sh 'sh \'npm audit fix\''
      }
    }

  }
}