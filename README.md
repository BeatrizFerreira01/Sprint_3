
README

-Introdução
Este projeto visa solucionar os problemas gerados pela falta de automação no setor de manutenção de automóveis, implementando um algoritmo baseado em Machine Learning (ML) e Processamento de Linguagem Natural (PLN) utilizando a API IBM Watson Assistant. A solução proposta tem como foco a gestão de estoque e a disponibilidade de atendimento nas oficinas parceiras, proporcionando benefícios tanto para os clientes quanto para as oficinas.

-Objetivo
O objetivo principal deste projeto é criar um sistema automatizado para o controle de estoque e a gestão da disponibilidade de atendimento, facilitando o agendamento de serviços e otimizando a eficiência operacional das oficinas. A Inteligência Artificial (IA) será responsável por cruzar as informações entre as necessidades do cliente e a logística da oficina, direcionando o cliente para a oficina mais próxima com disponibilidade de tempo e estoque adequado.

-Escopo do Projeto
O projeto foca no modelo de negócio B2B, integrando o consumidor final (cliente) e o prestador do serviço (oficina). Ele cobre dois pontos principais:
Controle de Estoque: Um sistema intuitivo que permite às oficinas gerenciar seu estoque de peças automotivas, evitando a falta de peças e agilizando os processos.
Gestão de Disponibilidade: Um sistema de agendamento que permite às oficinas indicar suas disponibilidades para o recebimento de clientes, melhorando a eficiência do atendimento.

-Benefícios
Para os clientes: Redução do tempo de espera e maior independência na identificação de problemas no veículo, o que gera menos frustração e espera.
Para as oficinas: Maior eficiência operacional através da automatização do controle de estoque e da gestão de agendamentos, reduzindo o tempo de manutenção suspensa e aumentando a rotatividade de clientes.
Para as seguradoras: Redução de custos relacionados à disponibilização de veículos para clientes segurados, uma vez que o tempo de reparo será otimizado.

-Tecnologias Utilizadas
IBM Watson Assistant: Para integração da IA com a identificação de problemas de automóveis e comunicação com o banco de dados.
Banco de Dados: Para armazenamento das informações sobre estoque e disponibilidade das oficinas.
API para integração B2B: Comunicação entre as oficinas e o sistema para agendamento e controle de estoque.

-Estrutura do Projeto

Diretórios e Arquivos
/src: Código-fonte do projeto.
/data: Banco de dados contendo informações sobre estoque e disponibilidade.
/chatbot: Integração com o IBM Watson Assistant para análise de linguagem natural.

-Fluxo de Funcionamento do Sistema
Cliente Interage com o Chatbot: O cliente descreve o problema do automóvel para o chatbot, que processa as informações utilizando a IA.
IA Processa a Solicitação: A IA cruza as informações fornecidas pelo cliente com o banco de dados de estoque e disponibilidade das oficinas.
Identificação da Oficina: A oficina mais próxima e com disponibilidade de tempo e peças é identificada.
Agendamento: O sistema agenda automaticamente o serviço na oficina selecionada e informa o cliente.
