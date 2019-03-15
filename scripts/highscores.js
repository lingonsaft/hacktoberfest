function CreateRecordsTable(Difficulty)
{
	let Content = document.createElement("div");
	Content.id = "records-content";

	let Table = document.createElement("table");
	Table.border = "1";
	Table.id = "table";
	Table.class = "container";

	let TableName = document.createElement("caption");
	TableName.innerHTML = `<h3>${Difficulty} Mode</h3>`;
	TableName.id = "table-name";
	Table.appendChild(TableName);
	
	let Row = document.createElement("tr");

	let Cell = document.createElement("th");
	Cell.innerHTML = "Nickname:";
	Cell.style.color = "white";
	Cell.style.background = "rgb(39, 110, 62)";
	Cell.style.width = "300px";
	Row.appendChild(Cell);

	Cell = document.createElement("th");
	Cell.innerHTML = "Time:";
	Cell.style.color = "white";
	Cell.style.background = "rgb(39, 110, 62)";
	Cell.style.width = "100px";
	Row.appendChild(Cell);

	Table.appendChild(Row);

	let PlayerCounter = 1;	
	while (PlayerCounter <= 10)
	{
		let Row = document.createElement("tr");

		Cell = document.createElement("th");
		Cell.innerHTML = localStorage.getItem(`Player${PlayerCounter}Nick${Difficulty}`);
		Row.appendChild(Cell);

		Cell = document.createElement("th");
		Cell.innerHTML = localStorage.getItem(`Player${PlayerCounter}Time${Difficulty}`) + ' s';
		Row.appendChild(Cell);

		PlayerCounter++;
		Table.appendChild(Row);			
	}

	Content.appendChild(Table);
	return Content;
}

function DisplayTables(id)
{
	let Content = document.createElement("div");
	Content.id = "records-container";
	Content.appendChild(CreateRecordsTable('Hard'));
	Content.appendChild(CreateRecordsTable('Medium'));
	Content.appendChild(CreateRecordsTable('Easy'));
	document.getElementById(id).appendChild(Content);
}
