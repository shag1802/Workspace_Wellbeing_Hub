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
        stage('Stage 2: Stopping old containers')
        {
            steps{
                script{
                    sh 'docker compose down'
                }
            }
        }
        stage('Stage 3: Testing')
        {
            steps{
                dir('server') {
                    script{
                        sh 'docker compose up -d'
                        sh 'npm install'
                        sh 'npm test'
                        sh 'docker compose down'
                    }
                }
            }
        }
        stage('Stage 4: Build Client Docker Image')
        {
            steps{
                dir('client') {
                    script{
                        client_docker_image = docker.build 'pushkar015/client:latest'
                    }
                }
            }
        }
        stage('Stage 5: Build Server Docker Image')
        {
            steps{
                dir('server') {
                    script{
                        server_docker_image = docker.build 'pushkar015/server:latest'
                    }
                }
            }
        }
        stage('Stage 6: Push docker image to hub')
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
        stage('Stage 7: Clean docker images')
        {
            steps{
                script{
                    sh 'docker container prune -f'
                    sh 'docker image prune -f'
                }
            }
        }
        stage('Stage 8: Ansible Deployment')
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
