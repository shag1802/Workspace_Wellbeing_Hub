pipeline {
    
    environment{
        client_docker_image = ""
        server_docker_image = ""
    }
    agent any
    stages {
        stage('Stage 1: Git Clone') {
            steps {
                git branch : 'main',
                url:'https://github.com/shag1802/SPE_Final_Project.git'
            }
        }
        stage('Stopping old containers')
        {
            steps{
                sh 'docker compose down'
                }
            }
        }
        stage('Step : Testing')
        {
            steps{
                dir('server') {
                    script{
                        sh 'npm install'
                        sh 'npm test'
                    }
                }
            }
        }
        stage('Step 2: Build Client Docker Image')
        {
            steps{
                dir('client') {
                    script{
                        client_docker_image = docker.build 'pushkar015/client:latest'
                    }
                }
            }
        }
        stage('Stage 3: Build Server Docker Image')
        {
            steps{
                dir('server') {
                    script{
                        server_docker_image = docker.build 'pushkar015/server:latest'
                    }
                }
            }
        }
        stage('Stage 4: Push docker image to hub')
        {
            steps{
                    script{
                        docker.withRegistry('', 'DockerHubCred'){
                        client_docker_image.push()
                        server_docker_image.push()
                        }
                    }
            }
        }
        stage('Stage 5: Clean docker images')
        {
            steps{
                script{
                    sh 'docker container prune -f'
                    sh 'docker image prune -f'
                }
            }
        }
        stage('Stage 6: Ansible Deployment')
        {
            steps{
                    ansiblePlaybook becomeUser: null,
                    colorized: true,
                    credentialsId: 'localhost',
                    disableHostKeyChecking: true,
                    installation: 'Ansible',
                    inventory: 'Deployment/inventory',
                    playbook: 'Deployment/deploy.yml',
                    sudoUser: null
            }
        }
    }
}
