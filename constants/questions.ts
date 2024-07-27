export type Question = {
	title: string
	answers: string[]
	correctAnswer: number
}
export const QUESTIOS_LIST: Question[] = [
	{
		title: 'Em qual parte da biblia e não e citado o nome de Abraao?',
		answers: ['Gênesis', 'Êxodo', 'Apocalipse', 'Salmos'],
		correctAnswer: 2
	},
	{
		title: 'Qual foi o primeiro milagre de Jesus registrado na Bíblia?',
		answers: [
			'Transformação da água em vinho',
			'Cura do cego Bartimeu',
			'Alimentação dos cinco mil',
			'Ressurreição de Lázaro'
		],
		correctAnswer: 0
	},
	{
		title: 'Quem escreveu a maior parte dos livros do Novo Testamento?',
		answers: ['Moisés', 'Paulo', 'Davi', 'Pedro'],
		correctAnswer: 1
	},
	{
		title: 'Qual é o último livro do Novo Testamento?',
		answers: ['Apocalipse', '1 Coríntios', 'Mateus', 'Romanos'],
		correctAnswer: 0
	},
	{
		title: 'Quem foi o primeiro rei de Israel?',
		answers: ['Saul', 'Davi', 'Salomão', 'Josué'],
		correctAnswer: 0
	},
	{
		title: 'Qual é o livro que vem antes de Apocalipse no Novo Testamento?',
		answers: ['Judas', 'Tito', '2 Pedro', '3 João'],
		correctAnswer: 2
	},
	{
		title: 'Quem foi o irmão mais velho de Moisés?',
		answers: ['Arão', 'José', 'Miriam', 'Isaque'],
		correctAnswer: 0
	},
	{
		title: 'Quantos livros existem no Novo Testamento?',
		answers: ['20', '25', '27', '30'],
		correctAnswer: 2
	},
	{
		title: 'Qual é o menor livro da Bíblia?',
		answers: ['Judas', 'Tito', 'Filemon', 'Obadias'],
		correctAnswer: 2
	},
	{
		title: 'Quem foi chamado de "o homem segundo o coração de Deus"?',
		answers: ['Moisés', 'Davi', 'José', 'Daniel'],
		correctAnswer: 1
	},
	{
		title: 'Qual é o último livro do Antigo Testamento?',
		answers: ['Malaquias', 'Zacarias', 'Ageu', 'Eclesiastes'],
		correctAnswer: 0
	},
	{
		title: 'Quem foi o profeta que desafiou os profetas de Baal no Monte Carmelo?',
		answers: ['Elias', 'Eliseu', 'Jeremias', 'Isaías'],
		correctAnswer: 0
	},
	{
		title: 'Qual é o último livro do Pentateuco?',
		answers: ['Gênesis', 'Êxodo', 'Levítico', 'Deuteronômio'],
		correctAnswer: 3
	},
	{
		title: 'Qual é o significado do nome "Emanuel", profetizado em Isaías 7:14?',
		answers: [
			'Deus é amor',
			'Deus conosco',
			'Deus é fiel',
			'Deus é misericordioso'
		],
		correctAnswer: 1
	},
	{
		title: 'Quem foi o primeiro discípulo a ser chamado por Jesus?',
		answers: ['Pedro', 'André', 'Tiago', 'João'],
		correctAnswer: 1
	},
	{
		title: 'Qual foi o nome do homem que sobreviveu ao dilúvio junto com sua família, de acordo com o Antigo Testamento?',
		answers: ['Noé', 'Abraão', 'Moisés', 'Isaque'],
		correctAnswer: 0
	},
	{
		title: 'Quem foi o primeiro rei de Israel?',
		answers: ['Saul', 'Davi', 'Salomão', 'José'],
		correctAnswer: 0
	},
	{
		title: 'Qual foi o destino de Moisés, o líder do Êxodo?',
		answers: [
			'Morreu no deserto',
			'Foi para Canaã',
			'Foi para o Egito',
			'Morreu no monte Sinai'
		],
		correctAnswer: 0
	},
	{
		title: 'Qual foi o décimo mandamento entregue por Deus a Moisés no monte Sinai?',
		answers: [
			'Não matarás',
			'Não furtarás',
			'Não cobiçarás a mulher do próximo',
			'Não terás outros deuses diante de mim'
		],
		correctAnswer: 2
	},
	{
		title: 'Quem foi o primeiro homem criado por Deus, de acordo com o livro de Gênesis?',
		answers: ['Adão', 'Abel', 'Caim', 'Noé'],
		correctAnswer: 0
	},
	{
		title: 'Quem foi o profeta que foi engolido por um grande peixe?',
		answers: ['Isaías', 'Jonas', 'Jeremias', 'Ezequiel'],
		correctAnswer: 1
	},
	{
		title: 'Quantos livros existem no Novo Testamento?',
		answers: ['24', '27', '30', '33'],
		correctAnswer: 1
	},
	{
		title: 'Qual foi o milagre de Jesus que envolveu a multiplicação de pães e peixes para alimentar uma multidão?',
		answers: [
			'Cura do cego Bartimeu',
			'Transfiguração',
			'Alimentação dos cinco mil',
			'Cura do paralítico de Betesda'
		],
		correctAnswer: 2
	},
	{
		title: 'Quem foi o profeta que construiu a arca de madeira?',
		answers: ['Noé', 'Elias', 'Isaías', 'Daniel'],
		correctAnswer: 0
	},
	{
		title: 'Qual é o livro que vem antes de Salmos no Antigo Testamento?',
		answers: ['Provérbios', 'Jó', 'Eclesiastes', 'Levítico'],
		correctAnswer: 3
	},
	{
		title: 'Quem foi o profeta que desafiou os profetas de Baal no Monte Carmelo?',
		answers: ['Eliseu', 'Jeremias', 'Isaías', 'Elias'],
		correctAnswer: 3
	},
	{
		title: 'Qual é o último livro do Antigo Testamento?',
		answers: ['Malaquias', 'Ageu', 'Zacarias', 'Miquéias'],
		correctAnswer: 0
	},
	{
		title: 'Quantos anos viveu Noé?',
		answers: ['700 anos', '900 anos', '950 anos', '1000 anos'],
		correctAnswer: 2
	},
	{
		title: 'Quem foi o primeiro rei de Israel?',
		answers: ['Saul', 'Davi', 'Salomão', 'José'],
		correctAnswer: 0
	},
	{
		title: 'Qual é o menor livro do Novo Testamento?',
		answers: ['2 João', 'Judas', 'Filemon', 'Tito'],
		correctAnswer: 2
	},
	{
		title: 'Quem foi o profeta que nasceu dentro de uma baleia?',
		answers: ['Isaías', 'Jonas', 'Jeremias', 'Ezequiel'],
		correctAnswer: 1
	},
	{
		title: 'Qual dos discípulos de Jesus era cobrador de impostos antes de se tornar um seguidor?',
		answers: ['Pedro', 'João', 'Mateus', 'Tiago'],
		correctAnswer: 2
	},
	{
		title: 'Quantos apóstolos Jesus tinha?',
		answers: ['10', '12', '14', '16'],
		correctAnswer: 1
	},
	{
		title: 'Quem foi o rei que escreveu muitos dos Salmos?',
		answers: ['Davi', 'Salomão', 'José', 'Ezequias'],
		correctAnswer: 0
	},
	{
		title: 'Qual foi a primeira praga enviada por Deus para o Faraó no Egito?',
		answers: [
			'Água se transformar em sangue',
			'Gafanhotos',
			'Morte dos primogênitos',
			'Trevas'
		],
		correctAnswer: 0
	},
	{
		title: 'Qual foi o profeta que enfrentou leões na cova?',
		answers: ['Isaías', 'Jeremias', 'Daniel', 'Ezequiel'],
		correctAnswer: 2
	},
	{
		title: 'Quem foi o irmão de Moisés que o acompanhou durante o Êxodo?',
		answers: ['Arão', 'José', 'Miriam', 'Isaque'],
		correctAnswer: 0
	},
	{
		title: 'Qual foi a primeira praga enviada por Deus sobre o Egito?',
		answers: [
			'Chuva de fogo',
			'Invasão de gafanhotos',
			'Água em sangue',
			'Escuridão'
		],
		correctAnswer: 2
	},
	{
		title: 'Quem era a esposa de Abraão?',
		answers: ['Rebeca', 'Sara', 'Lea', 'Raquel'],
		correctAnswer: 1
	},
	{
		title: 'Quem escreveu a maior parte dos Salmos?',
		answers: ['Moisés', 'Davi', 'Salomão', 'Ezequias'],
		correctAnswer: 1
	},
	{
		title: 'Qual é o nome do profeta que foi levado ao céu em um redemoinho de fogo?',
		answers: ['Isaías', 'Jeremias', 'Ezequiel', 'Elias'],
		correctAnswer: 3
	},
	{
		title: 'Qual era o nome do profeta conhecido como "o choro de Jerusalém"?',
		answers: ['Jeremias', 'Isaías', 'Ezequiel', 'Daniel'],
		correctAnswer: 0
	},
	{
		title: 'Quem escreveu o Livro de Apocalipse?',
		answers: ['Paulo', 'Pedro', 'João', 'Tiago'],
		correctAnswer: 2
	},
	{
		title: 'Qual dos discípulos de Jesus era conhecido como "o discípulo amado"?',
		answers: ['Pedro', 'Tiago', 'João', 'André'],
		correctAnswer: 2
	},
	{
		title: 'Qual é o primeiro livro da Bíblia?',
		answers: ['Gênesis', 'Êxodo', 'Levítico', 'Números'],
		correctAnswer: 0
	},
	{
		title: 'Quem foi o rei que construiu o Templo de Jerusalém?',
		answers: ['Davi', 'Salomão', 'Josias', 'Ezequias'],
		correctAnswer: 1
	},
	{
		title: 'Quem foi o profeta que clamou "Eis-me aqui, envia-me a mim"?',
		answers: ['Isaías', 'Jeremias', 'Ezequiel', 'Jonas'],
		correctAnswer: 0
	},
	{
		title: 'Qual foi o local onde Jesus foi batizado por João Batista?',
		answers: ['Rio Jordão', 'Mar da Galileia', 'Rio Nilo', 'Mar Morto'],
		correctAnswer: 0
	},
	{
		title: 'Quem foi o primeiro homem criado por Deus de acordo com a Bíblia?',
		answers: ['Adão', 'Noé', 'Abraão', 'Moisés'],
		correctAnswer: 0
	},
	{
		title: 'Qual livro vem antes de "Atos dos Apóstolos" no Novo Testamento?',
		answers: ['Lucas', 'Mateus', 'João', 'Romanos'],
		correctAnswer: 0
	},
	{
		title: 'Quem foi o profeta que subiu ao monte Sinai para receber as tábuas da lei de Deus?',
		answers: ['Moisés', 'Josué', 'Elias', 'Eliseu'],
		correctAnswer: 0
	},
	{
		title: 'Quem foi o profeta que desafiou os profetas de Baal no Monte Carmelo?',
		answers: ['Elias', 'Isaías', 'Jeremias', 'Jonas'],
		correctAnswer: 0
	},
	{
		title: 'Qual é o último livro do Antigo Testamento?',
		answers: ['Malaquias', 'Ageu', 'Zacarias', 'Miquéias'],
		correctAnswer: 0
	},
	{
		title: 'Quantos anos viveu Noé?',
		answers: ['700 anos', '900 anos', '950 anos', '1000 anos'],
		correctAnswer: 2
	},
	{
		title: 'Quem foi o primeiro rei de Israel?',
		answers: ['Saul', 'Davi', 'Salomão', 'José'],
		correctAnswer: 0
	},
	{
		title: 'Qual é o menor livro do Novo Testamento?',
		answers: ['2 João', 'Judas', 'Filemon', 'Tito'],
		correctAnswer: 2
	},
	{
		title: 'Qual foi o profeta que escreveu o Livro de Isaías?',
		answers: ['Isaías', 'Jeremias', 'Ezequiel', 'Daniel'],
		correctAnswer: 0
	},
	{
		title: 'Quem foi o primeiro homem criado por Deus, de acordo com o livro de Gênesis?',
		answers: ['Adão', 'Noé', 'Abraão', 'Moisés'],
		correctAnswer: 0
	},
	{
		title: 'Quantos filhos teve Jacó, o patriarca?',
		answers: ['10', '12', '20', '7'],
		correctAnswer: 1
	},
	{
		title: 'Quem foi o profeta que escreveu o Livro de Daniel?',
		answers: ['Ezequiel', 'Jeremias', 'Isaías', 'Daniel'],
		correctAnswer: 3
	},
	{
		title: 'Qual foi o mandamento que Jesus destacou como o maior?',
		answers: [
			'Honrar pai e mãe',
			'Não matar',
			'Amar a Deus sobre todas as coisas',
			'Não roubar'
		],
		correctAnswer: 2
	},
	{
		title: 'Quem foi o profeta que desafiou os sacerdotes de Baal no monte Carmelo?',
		answers: ['Elias', 'Isaías', 'Jeremias', 'Jonas'],
		correctAnswer: 0
	},
	{
		title: 'Quantos livros compõem o Novo Testamento?',
		answers: ['24', '27', '30', '33'],
		correctAnswer: 1
	},
	{
		title: 'Qual foi o primeiro milagre registrado de Jesus?',
		answers: [
			'Cura do cego Bartimeu',
			'Transformação da água em vinho',
			'Alimentação dos cinco mil',
			'Ressurreição de Lázaro'
		],
		correctAnswer: 1
	},
	{
		title: 'Quem foi o profeta que construiu a arca para salvar sua família e os animais durante o Dilúvio?',
		answers: ['Noé', 'Abraão', 'Moisés', 'Isaías'],
		correctAnswer: 0
	},
	{
		title: 'Qual é o último livro da Bíblia?',
		answers: ['Gênesis', 'Apocalipse', 'Mateus', 'Atos dos Apóstolos'],
		correctAnswer: 1
	},
	{
		title: 'Quem foi o profeta que foi engolido por uma grande baleia?',
		answers: ['Isaías', 'Jeremias', 'Ezequiel', 'Jonas'],
		correctAnswer: 3
	},
	{
		title: 'Qual dos discípulos de Jesus é conhecido como "o discípulo amado"?',
		answers: ['Pedro', 'Tiago', 'João', 'André'],
		correctAnswer: 2
	},
	{
		title: 'Quantos anos viveu Moisés?',
		answers: ['120 anos', '150 anos', '80 anos', '100 anos'],
		correctAnswer: 0
	},
	{
		title: 'Qual é o primeiro livro do Novo Testamento?',
		answers: ['Mateus', 'Marcos', 'Lucas', 'João'],
		correctAnswer: 0
	},
	{
		title: 'Quem foi o profeta que sucedeu Elias?',
		answers: ['Eliseu', 'Isaías', 'Jeremias', 'Ezequiel'],
		correctAnswer: 0
	},
	{
		title: 'Quem foi o profeta que enfrentou leões na cova?',
		answers: ['Isaías', 'Jeremias', 'Daniel', 'Ezequiel'],
		correctAnswer: 2
	},
	{
		title: 'Quem era a mãe de Jesus?',
		answers: ['Maria', 'Sara', 'Rebeca', 'Eva'],
		correctAnswer: 0
	},
	{
		title: 'Quantos livros compõem o Antigo Testamento?',
		answers: ['29', '39', '49', '59'],
		correctAnswer: 1
	},
	{
		title: 'Qual é o mandamento que diz "Não matarás"?',
		answers: [
			'Quinto mandamento',
			'Sexto mandamento',
			'Sétimo mandamento',
			'Oitavo mandamento'
		],
		correctAnswer: 1
	},
	{
		title: 'Qual é o primeiro livro da Bíblia?',
		answers: ['Êxodo', 'Levítico', 'Gênesis', 'Números'],
		correctAnswer: 2
	},
	{
		title: 'Quem foi o profeta que foi chamado por Deus para pregar aos ninivitas?',
		answers: ['Isaías', 'Jeremias', 'Jonas', 'Ezequiel'],
		correctAnswer: 2
	},
	{
		title: 'Qual era a profissão de Mateus antes de se tornar um discípulo de Jesus?',
		answers: [
			'Pescador',
			'Cobrador de impostos',
			'Carpinteiro',
			'Agricultor'
		],
		correctAnswer: 1
	},
	{
		title: 'Quantas pragas Deus enviou sobre o Egito antes de libertar os israelitas?',
		answers: ['7', '9', '10', '12'],
		correctAnswer: 2
	},
	{
		title: 'Quem foi o profeta que teve uma visão dos quatros seres viventes e do trono de Deus?',
		answers: ['Isaías', 'Jeremias', 'Ezequiel', 'Daniel'],
		correctAnswer: 2
	},
	{
		title: 'Qual é o último livro do Novo Testamento?',
		answers: ['Apocalipse', 'Romanos', 'Atos dos Apóstolos', '1 Coríntios'],
		correctAnswer: 0
	},
	{
		title: 'Qual foi o profeta que foi engolido por um grande peixe?',
		answers: ['Isaías', 'Jonas', 'Jeremias', 'Ezequiel'],
		correctAnswer: 1
	},
	{
		title: 'Quem foi o irmão de Moisés que o acompanhou durante o Êxodo?',
		answers: ['Arão', 'José', 'Miriam', 'Isaque'],
		correctAnswer: 0
	},
	{
		title: 'Qual foi a primeira praga enviada por Deus sobre o Egito?',
		answers: [
			'Chuva de fogo',
			'Invasão de gafanhotos',
			'Água em sangue',
			'Escuridão'
		],
		correctAnswer: 2
	},
	{
		title: 'Quem era a esposa de Abraão?',
		answers: ['Rebeca', 'Sara', 'Lea', 'Raquel'],
		correctAnswer: 1
	},
	{
		title: 'Quem escreveu a maior parte dos Salmos?',
		answers: ['Moisés', 'Davi', 'Salomão', 'Ezequias'],
		correctAnswer: 1
	},
	{
		title: 'Quem foi o profeta que nasceu dentro de uma baleia?',
		answers: ['Isaías', 'Jonas', 'Jeremias', 'Ezequiel'],
		correctAnswer: 1
	},
	{
		title: 'Qual dos discípulos de Jesus era cobrador de impostos antes de se tornar um seguidor?',
		answers: ['Pedro', 'João', 'Mateus', 'Tiago'],
		correctAnswer: 2
	},
	{
		title: 'Quantos apóstolos Jesus tinha?',
		answers: ['10', '12', '14', '16'],
		correctAnswer: 1
	},
	{
		title: 'Quem foi o rei que escreveu muitos dos Salmos?',
		answers: ['Davi', 'Salomão', 'José', 'Ezequias'],
		correctAnswer: 0
	},
	{
		title: 'Qual foi a primeira praga enviada por Deus para o Faraó no Egito?',
		answers: [
			'Água se transformar em sangue',
			'Gafanhotos',
			'Morte dos primogênitos',
			'Trevas'
		],
		correctAnswer: 0
	},
	{
		title: 'Qual era o nome do profeta que foi levado ao céu em um redemoinho de fogo?',
		answers: ['Isaías', 'Jeremias', 'Ezequiel', 'Elias'],
		correctAnswer: 3
	},
	{
		title: 'Quem foi o irmão de Moisés que o ajudou a falar com o faraó?',
		answers: ['Arão', 'José', 'Miriam', 'Isaque'],
		correctAnswer: 0
	},
	{
		title: 'Qual dos doze apóstolos traiu Jesus?',
		answers: ['Pedro', 'André', 'Judas', 'João'],
		correctAnswer: 2
	},
	{
		title: 'Quem foi o profeta conhecido como "o choro de Jerusalém"?',
		answers: ['Isaías', 'Jeremias', 'Ezequiel', 'Daniel'],
		correctAnswer: 1
	},
	{
		title: 'Qual é o nome do rio em que João Batista batizava as pessoas?',
		answers: ['Nilo', 'Tigre', 'Eufrates', 'Jordão'],
		correctAnswer: 3
	},
	{
		title: 'Quem foi o profeta que enfrentou leões na cova?',
		answers: ['Isaías', 'Jeremias', 'Daniel', 'Ezequiel'],
		correctAnswer: 2
	},
	{
		title: 'Quem era a mãe de Jesus?',
		answers: ['Maria', 'Sara', 'Rebeca', 'Eva'],
		correctAnswer: 0
	},
	{
		title: 'Quantos livros compõem o Antigo Testamento?',
		answers: ['29', '39', '49', '59'],
		correctAnswer: 1
	},
	{
		title: 'Qual é o mandamento que diz "Não matarás"?',
		answers: [
			'Quinto mandamento',
			'Sexto mandamento',
			'Sétimo mandamento',
			'Oitavo mandamento'
		],
		correctAnswer: 1
	},
	{
		title: 'Qual é o primeiro livro da Bíblia?',
		answers: ['Êxodo', 'Levítico', 'Gênesis', 'Números'],
		correctAnswer: 2
	},
	{
		title: 'Qual objeto bíblico se transformou em uma serpente?',
		answers: [
			'Cajado de Moisés',
			'Vaso de Davi',
			'Tocha de Elias',
			'Cruz de Jesus'
		],
		correctAnswer: 0
	},
	{
		title: 'Quem foi o profeta que escapou de ser morto por ser engolido por um grande peixe?',
		answers: ['Isaías', 'Jonas', 'Ezequiel', 'Daniel'],
		correctAnswer: 1
	},
	{
		title: 'Qual desses personagens bíblicos foi arrebatado para o céu em um carro de fogo?',
		answers: ['Elias', 'Eliseu', 'Jeremias', 'José'],
		correctAnswer: 0
	},
	{
		title: 'Quantos dias e noites choveu durante o dilúvio, de acordo com a Bíblia?',
		answers: ['30', '40', '50', '60'],
		correctAnswer: 1
	},
	{
		title: 'Qual animal falou com Balaão na Bíblia?',
		answers: ['Cavalo', 'Jumenta', 'Cabra', 'Leão'],
		correctAnswer: 1
	},
	{
		title: 'Quem foi o rei que escreveu poesias e músicas, muitas das quais estão registradas nos Salmos?',
		answers: ['Davi', 'Salomão', 'Saul', 'José'],
		correctAnswer: 0
	},
	{
		title: 'Qual foi o instrumento que Davi tocava para acalmar o rei Saul?',
		answers: ['Harpa', 'Flauta', 'Lira', 'Trombeta'],
		correctAnswer: 0
	},
	{
		title: 'Quantos irmãos tinha José, o filho de Jacó?',
		answers: ['7', '10', '11', '12'],
		correctAnswer: 3
	},
	{
		title: 'Qual é o nome do gigante filisteu derrotado por Davi com uma funda e uma pedra?',
		answers: ['Golias', 'Goliasim', 'Goliat', 'Goliardo'],
		correctAnswer: 2
	},
	{
		title: 'Quem foi a esposa de José, filho de Jacó?',
		answers: ['Rebeca', 'Lea', 'Raquel', 'Maria'],
		correctAnswer: 2
	},
	{
		title: 'Qual era a profissão de Mateus antes de se tornar um dos discípulos de Jesus?',
		answers: [
			'Pescador',
			'Cobrador de impostos',
			'Carpinteiro',
			'Agricultor'
		],
		correctAnswer: 1
	},
	{
		title: 'Quem foi o profeta que andou nu e descalço durante três anos como sinal para Israel?',
		answers: ['Jeremias', 'Isaías', 'Ezequiel', 'Daniel'],
		correctAnswer: 2
	},
	{
		title: 'Qual foi o nome da esposa de Isaque?',
		answers: ['Rebeca', 'Lea', 'Raquel', 'Sara'],
		correctAnswer: 0
	},
	{
		title: 'Qual foi o fruto proibido mencionado no relato do Jardim do Éden?',
		answers: ['Maçã', 'Laranja', 'Uva', 'Figos'],
		correctAnswer: 0
	},
	{
		title: 'Quem foi o rei que construiu o Templo de Jerusalém?',
		answers: ['Davi', 'Salomão', 'Josias', 'Ezequias'],
		correctAnswer: 1
	},
	{
		title: 'Quem era o irmão mais velho de Moisés?',
		answers: ['Arão', 'Miriam', 'José', 'Isaque'],
		correctAnswer: 0
	},
	{
		title: 'Qual era o nome da esposa de Noé?',
		answers: ['Sara', 'Lea', 'Raquel', 'Naamá'],
		correctAnswer: 3
	},
	{
		title: 'Qual é o livro que contém a história da rainha Ester?',
		answers: ['Rute', 'Ester', 'Judite', 'Debora'],
		correctAnswer: 1
	},
	{
		title: 'Quem foi o profeta que nasceu em Belém, a cidade de Davi?',
		answers: ['Isaías', 'Jeremias', 'Ezequiel', 'Miquéias'],
		correctAnswer: 3
	},
	{
		title: 'Qual foi o filho de Davi que tentou usurpar o trono de seu pai?',
		answers: ['Absalão', 'Salomão', 'Adonias', 'Amom'],
		correctAnswer: 0
	},
	{
		title: 'Qual é o último livro do Antigo Testamento?',
		answers: ['Malaquias', 'Ageu', 'Zacarias', 'Miquéias'],
		correctAnswer: 0
	},
	{
		title: 'Quantos anos viveu Noé?',
		answers: ['700 anos', '900 anos', '950 anos', '1000 anos'],
		correctAnswer: 2
	},
	{
		title: 'Quem foi o primeiro rei de Israel?',
		answers: ['Saul', 'Davi', 'Salomão', 'José'],
		correctAnswer: 0
	},
	{
		title: 'Qual é o menor livro do Novo Testamento?',
		answers: ['2 João', 'Judas', 'Filemon', 'Tito'],
		correctAnswer: 2
	},
	{
		title: 'Qual foi a primeira praga enviada por Deus para o Faraó no Egito?',
		answers: [
			'Água se transformar em sangue',
			'Gafanhotos',
			'Morte dos primogênitos',
			'Trevas'
		],
		correctAnswer: 0
	},
	{
		title: 'Quem foi o profeta que escreveu o Livro de Isaías?',
		answers: ['Isaías', 'Jeremias', 'Ezequiel', 'Daniel'],
		correctAnswer: 0
	},
	{
		title: 'Quem foi o primeiro homem criado por Deus, de acordo com o livro de Gênesis?',
		answers: ['Adão', 'Noé', 'Abraão', 'Moisés'],
		correctAnswer: 0
	},
	{
		title: 'Quantos filhos teve Jacó, o patriarca?',
		answers: ['10', '12', '20', '7'],
		correctAnswer: 1
	},
	{
		title: 'Quem foi o profeta que escreveu o Livro de Daniel?',
		answers: ['Ezequiel', 'Jeremias', 'Isaías', 'Daniel'],
		correctAnswer: 3
	},
	{
		title: 'Qual é o último livro do Antigo Testamento?',
		answers: ['Malaquias', 'Ageu', 'Zacarias', 'Miquéias'],
		correctAnswer: 0
	},
	{
		title: 'Quantos anos viveu Noé?',
		answers: ['700 anos', '900 anos', '950 anos', '1000 anos'],
		correctAnswer: 2
	},
	{
		title: 'Quem foi o primeiro rei de Israel?',
		answers: ['Saul', 'Davi', 'Salomão', 'José'],
		correctAnswer: 0
	},
	{
		title: 'Qual é o menor livro do Novo Testamento?',
		answers: ['2 João', 'Judas', 'Filemon', 'Tito'],
		correctAnswer: 2
	},
	{
		title: 'Qual foi a primeira praga enviada por Deus para o Faraó no Egito?',
		answers: [
			'Água se transformar em sangue',
			'Gafanhotos',
			'Morte dos primogênitos',
			'Trevas'
		],
		correctAnswer: 0
	},
	{
		title: 'Quem foi o profeta que escreveu o Livro de Isaías?',
		answers: ['Isaías', 'Jeremias', 'Ezequiel', 'Daniel'],
		correctAnswer: 0
	},
	{
		title: 'Quem foi o primeiro homem criado por Deus, de acordo com o livro de Gênesis?',
		answers: ['Adão', 'Noé', 'Abraão', 'Moisés'],
		correctAnswer: 0
	},
	{
		title: 'Quantos filhos teve Jacó, o patriarca?',
		answers: ['10', '12', '20', '7'],
		correctAnswer: 1
	},
	{
		title: 'Quem foi o profeta que escreveu o Livro de Daniel?',
		answers: ['Ezequiel', 'Jeremias', 'Isaías', 'Daniel'],
		correctAnswer: 3
	},
	{
		title: 'Qual era o nome do profeta que foi chamado por Deus para pregar aos ninivitas?',
		answers: ['Isaías', 'Jeremias', 'Jonas', 'Malaquias'],
		correctAnswer: 2
	},
	{
		title: 'Quem foi o profeta que desafiou os sacerdotes de Baal para um duelo de sacrifícios?',
		answers: ['Ezequiel', 'Isaías', 'Elias', 'Jeremias'],
		correctAnswer: 2
	},
	{
		title: 'Quantos dias e noites choveu durante o Dilúvio, de acordo com a narrativa bíblica?',
		answers: ['30', '40', '50', '60'],
		correctAnswer: 1
	},
	{
		title: 'Qual foi o rei que pediu a cabeça de João Batista em um prato?',
		answers: ['Herodes', 'Pilatos', 'Nabucodonosor', 'César'],
		correctAnswer: 0
	},
	{
		title: 'Quem foi o profeta que teve uma visão de um vale cheio de ossos secos que se tornaram vivos novamente?',
		answers: ['Isaías', 'Ezequiel', 'Daniel', 'Jeremias'],
		correctAnswer: 1
	},
	{
		title: 'Qual foi o nome do rei que mandou lançar Daniel na cova dos leões?',
		answers: ['Dario', 'Nabucodonosor', 'Belquior', 'Assuero'],
		correctAnswer: 0
	},
	{
		title: 'Quem foi o profeta que teve uma visão do trono de Deus rodeado por serafins cantando "Santo, Santo, Santo"?',
		answers: ['Isaías', 'Ezequiel', 'Jeremias', 'Daniel'],
		correctAnswer: 0
	},
	{
		title: 'Qual foi o nome do local onde Jesus foi crucificado?',
		answers: [
			'Monte Sinai',
			'Monte Carmelo',
			'Monte das Oliveiras',
			'Monte Calvário'
		],
		correctAnswer: 3
	},
	{
		title: 'Quem foi o primeiro rei de Israel?',
		answers: ['Saul', 'Davi', 'Salomão', 'Samuel'],
		correctAnswer: 0
	},
	{
		title: 'Qual foi o nome da irmã de Lázaro, que Jesus ressuscitou dos mortos?',
		answers: ['Maria', 'Martha', 'Salomé', 'Rebeca'],
		correctAnswer: 1
	},
	{
		title: 'Quem foi o profeta que profetizou a vinda do Messias como "uma virgem conceberá e dará à luz um filho"?',
		answers: ['Isaías', 'Jeremias', 'Ezequiel', 'Daniel'],
		correctAnswer: 0
	},
	{
		title: 'Qual era o nome do filho de Davi que morreu sete dias depois de seu nascimento como consequência do adultério de Davi e Bate-Seba?',
		answers: ['Salomão', 'Absalão', 'Amom', 'Adonias'],
		correctAnswer: 2
	},
	{
		title: 'Quem foi o profeta que viveu no ventre de sua mãe por seis meses antes de nascer?',
		answers: ['Isaías', 'Jeremias', 'João Batista', 'Ezequiel'],
		correctAnswer: 2
	},
	{
		title: 'Qual foi a primeira cidade conquistada pelos israelitas depois de atravessar o rio Jordão durante a conquista de Canaã?',
		answers: ['Jerusalém', 'Ai', 'Jericó', 'Babilônia'],
		correctAnswer: 2
	},
	{
		title: 'Quem foi o profeta que foi arrebatado ao céu em um redemoinho de fogo, deixando seu manto para trás?',
		answers: ['Eliseu', 'Elias', 'Isaías', 'Jeremias'],
		correctAnswer: 1
	},
	{
		title: 'Qual foi o nome da mãe de João Batista?',
		answers: ['Maria', 'Isabel', 'Marta', 'Raquel'],
		correctAnswer: 1
	},
	{
		title: 'Quem foi o rei que mandou matar todos os bebês do sexo masculino em Belém após o nascimento de Jesus?',
		answers: ['Herodes', 'Pilatos', 'Nero', 'César'],
		correctAnswer: 0
	},
	{
		title: 'Qual é o nome do rio onde João Batista batizava as pessoas?',
		answers: ['Nilo', 'Tigre', 'Eufrates', 'Jordão'],
		correctAnswer: 3
	},
	{
		title: 'Quem foi o profeta que teve que pregar nu como sinal de juízo contra o Egito e a Etiópia?',
		answers: ['Isaías', 'Jeremias', 'Ezequiel', 'Oseias'],
		correctAnswer: 0
	},
	{
		title: 'Qual foi o nome do profeta que foi devorado por um grande peixe e depois vomitado em terra firme?',
		answers: ['Isaías', 'Jeremias', 'Jonas', 'Amós'],
		correctAnswer: 2
	},
	{
		title: 'Qual foi o nome do profeta que teve um encontro com Deus na sarça ardente?',
		answers: ['Moisés', 'Josué', 'Samuel', 'Gideão'],
		correctAnswer: 0
	},
	{
		title: 'Quem foi o profeta que foi lançado na cova dos leões por se recusar a deixar de orar a Deus?',
		answers: ['Isaías', 'Jeremias', 'Daniel', 'Ezequiel'],
		correctAnswer: 2
	},
	{
		title: 'Qual é o nome do rio onde Jesus foi batizado por João Batista?',
		answers: ['Nilo', 'Eufrates', 'Jordão', 'Tigre'],
		correctAnswer: 2
	},
	{
		title: 'Quem foi o profeta que fugiu para o deserto após ter uma grande vitória sobre os profetas de Baal no monte Carmelo?',
		answers: ['Isaías', 'Jeremias', 'Elias', 'Ezequiel'],
		correctAnswer: 2
	},
	{
		title: 'Qual foi o primeiro milagre que Jesus realizou?',
		answers: [
			'Transformação da água em vinho',
			'Cura do cego de nascença',
			'Multiplicação dos pães e peixes',
			'Ressurreição de Lázaro'
		],
		correctAnswer: 0
	},
	{
		title: 'Qual foi o nome do profeta que foi alimentado por corvos durante uma seca em Israel?',
		answers: ['Eliseu', 'Isaías', 'Elias', 'Jonas'],
		correctAnswer: 2
	},
	{
		title: 'Quem foi o profeta que viu uma visão dos quatro seres viventes e da roda ardente no céu?',
		answers: ['Daniel', 'Ezequiel', 'Isaías', 'Jeremias'],
		correctAnswer: 1
	},
	{
		title: 'Qual foi o nome do profeta que teve uma esposa chamada Gômer, representando a infidelidade de Israel?',
		answers: ['Oseias', 'Miquéias', 'Naum', 'Amós'],
		correctAnswer: 0
	},
	{
		title: 'Qual era o nome do filho de Abraão que foi quase sacrificado por seu pai?',
		answers: ['Isaque', 'Jacó', 'José', 'Moisés'],
		correctAnswer: 0
	},
	{
		title: 'Qual foi o nome do profeta que pregou para o povo de Nínive e os convenceu a se arrependerem?',
		answers: ['Jonas', 'Miqueias', 'Naum', 'Ageu'],
		correctAnswer: 0
	},
	{
		title: 'Qual foi o profeta que teve seu ministério marcado por visões simbólicas, incluindo a visão de um vale cheio de ossos secos?',
		answers: ['Isaías', 'Jeremias', 'Ezequiel', 'Daniel'],
		correctAnswer: 2
	},
	{
		title: 'Quem foi o profeta que recebeu instruções para construir uma arca antes do dilúvio?',
		answers: ['Moisés', 'Noé', 'Josué', 'Abraão'],
		correctAnswer: 1
	},
	{
		title: 'Qual foi o nome do profeta que foi alimentado por corvos durante um período de fome?',
		answers: ['Isaías', 'Jeremias', 'Elias', 'Daniel'],
		correctAnswer: 2
	},
	{
		title: 'Quem foi o rei de Israel que construiu o Templo de Jerusalém?',
		answers: ['Davi', 'Salomão', 'Josias', 'Ezequias'],
		correctAnswer: 1
	},
	{
		title: 'Qual foi o milagre de Jesus que envolveu a multiplicação de pães e peixes para alimentar uma multidão?',
		answers: [
			'Caminhar sobre as águas',
			'Cura do cego de nascença',
			'Ressurreição de Lázaro',
			'Multiplicação dos pães e peixes'
		],
		correctAnswer: 3
	},
	{
		title: 'Quem foi o profeta que clamou "Aqui estou, envia-me" quando Deus perguntou quem iria enviar como mensageiro?',
		answers: ['Isaías', 'Jeremias', 'Ezequiel', 'Daniel'],
		correctAnswer: 0
	},
	{
		title: 'Qual foi o discípulo de Jesus que o traiu por trinta moedas de prata?',
		answers: ['Pedro', 'Tiago', 'Judas', 'João'],
		correctAnswer: 2
	},
	{
		title: 'Quem foi o profeta que profetizou sobre o nascimento de Jesus em Belém?',
		answers: ['Isaías', 'Jeremias', 'Malaquias', 'Ezequiel'],
		correctAnswer: 0
	},
	{
		title: 'Qual era o nome do filho de Abraão que foi oferecido em sacrifício no monte Moriá?',
		answers: ['Isaque', 'Jacó', 'José', 'Moisés'],
		correctAnswer: 0
	},
	{
		title: 'Qual é o nome do lugar onde Jesus foi crucificado?',
		answers: ['Gólgota', 'Belém', 'Jerusalém', 'Samaritana'],
		correctAnswer: 0
	},
	{
		title: 'Qual foi o profeta que foi tragado por um grande peixe após tentar fugir da vontade de Deus?',
		answers: ['Isaías', 'Jeremias', 'Jonas', 'Ezequiel'],
		correctAnswer: 2
	},
	{
		title: 'Quem foi o rei que construiu o Templo de Jerusalém?',
		answers: ['Davi', 'Salomão', 'Josias', 'Ezequias'],
		correctAnswer: 1
	},
	{
		title: 'Qual foi o profeta que realizou um desafio aos profetas de Baal no monte Carmelo?',
		answers: ['Isaías', 'Jeremias', 'Elias', 'Ezequiel'],
		correctAnswer: 2
	},
	{
		title: 'Quem foi o profeta que teve uma visão do trono de Deus cercado por serafins cantando "Santo, Santo, Santo"?',
		answers: ['Isaías', 'Jeremias', 'Ezequiel', 'Daniel'],
		correctAnswer: 0
	},
	{
		title: 'Qual foi o nome da esposa de Noé?',
		answers: ['Sara', 'Lea', 'Raquel', 'Naamá'],
		correctAnswer: 3
	},
	{
		title: 'Quem foi o profeta que viu uma visão dos quatro seres viventes e das rodas ardentes?',
		answers: ['Isaías', 'Jeremias', 'Ezequiel', 'Daniel'],
		correctAnswer: 2
	},
	{
		title: 'Qual era o nome do rei que teve uma experiência com uma "mão escrevendo na parede" durante um banquete?',
		answers: ['Belsazar', 'Nabucodonosor', 'Ciro', 'Dario'],
		correctAnswer: 0
	},
	{
		title: 'Quem foi o profeta que proferiu a famosa profecia: "Nem espada nem força, mas sim o meu Espírito, diz o Senhor dos Exércitos"?',
		answers: ['Isaías', 'Jeremias', 'Joel', 'Malaquias'],
		correctAnswer: 2
	},
	{
		title: 'Qual foi o profeta que foi chamado por Deus para pregar aos ninivitas, resultando em seu arrependimento?',
		answers: ['Isaías', 'Jeremias', 'Jonas', 'Miquéias'],
		correctAnswer: 2
	},
	{
		title: 'Qual foi o nome do profeta que profetizou sobre o nascimento de Jesus em Belém?',
		answers: ['Isaías', 'Jeremias', 'Miquéias', 'Ezequiel'],
		correctAnswer: 0
	}
] as const
