$(document).ready(function() {
    $('#addrulediv button').click(addRule);
    $('#cleardiv button').click(clearRules);
});

function addRule() {
    let rules = [];
    let ruleToAdd = {
        field: $('#field option:selected').val(),
        operator: $('#operator  option:selected').val(),
        value: $('#value').val()
    };
    if (rules.indexOf(ruleToAdd) === -1) {
        rules.push(ruleToAdd);
    }
    for (let rule of rules) {
        $('#ruleaddeddiv').append(
            '<div>'+rule['field']+' '+rule['operator']+' '+rule['value']+'</div>'
        );
    }
    $('#field, #operator, #value').val('');
    return rules;
}

function clearRules() {
    $('#ruleaddeddiv').empty();
    $('#field, #operator, #value').val('');
}
