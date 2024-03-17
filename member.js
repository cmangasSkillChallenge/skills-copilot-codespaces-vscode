function skillsMember()
{
    this.skills = [];
    this.addSkills = function(skill)
    {
        this.skills.push(skill);
    };
    this.removeSkills = function(skill)
    {
        this.skills.pop(skill);
    };
    this.getSkills = function()
    {
        return this.skills;
    };
}