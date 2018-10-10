
$(document).ready(function () {
	$.ajaxSetup({
	  headers : {
		'Authorization' : 'token 50eb74c1c24ef3bbc02c5fd62433989432a8ab55'
	  }
	});
	//get issues non pull request
	$.getJSON("https://api.github.com/repos/lingonsaft/hacktoberfest", function(json){
		$.getJSON('https://api.github.com/search/issues?q=lingonsaft/hacktoberfest+state:open', getOpenPR);
		function getOpenPR(data){
			repo_json = json;
			num_of_open_issues = repo_json.open_issues;
			num_of_stars = repo_json.stargazers_count;
			num_of_forks = repo_json.forks_count;
			console.log(num_of_open_issues);
			issue_json = data; 
			num_of_issue_nonpr_count = issue_json.items.length;
			//subtract two for trending repos
			num_sub = 2;
			num_of_issue_nonpr = num_of_issue_nonpr_count - num_sub; 
			console.log(num_of_issue_nonpr);
			num_of_open_pullrequest = num_of_open_issues - num_of_issue_nonpr;
			$('#pull_number').append(num_of_open_pullrequest);
			$('#star_number').append(num_of_stars); 
			$('#fork_number').append(num_of_forks);
		}
	});
	
	
 
});