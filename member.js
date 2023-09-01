function skillsMember(){
return{
restrict: 'E',
templateUrl: 'modules/skills/views/member.html', 
controller: 'SkillsMemberController',
controllerAs: "m",
bindToController: true,
scope: {
member: '='
}
};
}