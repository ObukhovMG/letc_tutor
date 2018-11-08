lesson 1 - modification style in property
	styleOpt: {
		padding: 10,
		color: 'red'
	}

lesson 2 - Change buttons properties
	object.kids[2].content = 'i changed label'

lesson 3 - Change some svg properties
	object.kids[1].dataOpt.color = 'black'

lesson 4 - Place the jumper at the center of the box.
	"it's already there"

lesson 5 - Explain why rendered objects more than described
	"Because object prebuild"
	object.kids[1].kind == 'prebuild'

	"it initialise remote call using hashtag property 'Call_to_action_1' and other hardcode metadata"
	"browser fetches new json data objects and it appens to parrent object"
	"snapshot/svc/?&service=block.content&hashtag=Call_to_action_1&oid=world&method=block.content"

lesson 6 - Explain where do the images come from ? How?	
	object.kids[1].kind == list_stream

	"wrapper 'list_stream' do remote call to fetch data and defines item render method in itemsOpt"
	"api property has parameters to call remote data with image ids and another data to fetch them"
	"itemsOpt has wrapper defines component to render fetched items"

lesson 7 - Add a new item at the end of the dropdown menu.
	object.kids[1].items.kids[2] "copy to" .kids[3]
	"duplicates 'calendar' and 'memory'"

lesson 8 - How would you do to make the first one to become the default selection?
	object.kids[1].kids[0].kids[0].initialState = 1
	object.kids[1].kids[2].kids[1].initialState = 0

lesson 9 - Add a textarea field to the form. Set its height to 200px
	object.kids[1].kids[0].kids[3]
		.{
			name: 'test_input',
			className: 'sandbox-form_input',
			kind: 'entry',
			type: 'textarea',
			placeholder: 'input some test data',
			styleOpt: {
				height: 200
			}
		}

lesson 10 - some demo with remote snippet code
	object.kids[1]...
	"creator - defines snippet link"
	'vendorOpt array defines additional vendor resources to load'		

lesson 11 - Try to plug in your own work here. See example in #10
	object.kids[1]
		.{
			creator: 'https://cdn.jsdelivr.net/gh/ObukhovMG/letc_tutor@1.3/lesson_11_snippet.js'
			vendorOpt: [
				{
					script: {
						src: 'https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=e9ee34ad-bce1-4a2f-a8a7-181fac349750',
						crossorigin: true
					}
				}
			]
		}

	'connect bootstrap library'	