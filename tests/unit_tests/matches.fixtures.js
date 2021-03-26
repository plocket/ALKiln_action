let matches =  {}

// ============================
// Standard fields - no proxies, no showifs.
// ============================
// TODO: Add more complex fields. E.g `object_checkboxes` and dropdown with `object`.
matches.standard = [
  // 3 radio choices that won't get selected
  {
    "field": { "tag": "input", "type": "checkbox", "selector": "input[name=\"Y2hlY2tib3hlc195ZXNubw\"][value=\"True\"]", "rows": [ { "var": "checkboxes_yesno", "value": "True", "checked": false } ] },
    "table": { "var": "checkboxes_yesno", "value": "True", "checked": true },
  },
  {
    "field": { "tag": "input", "type": "checkbox", "selector": "input[name=\"Y2hlY2tib3hlc19vdGhlcl8xW0InWTJobFkydGliM2hmYjNSb1pYSmZNVjl2Y0hSZk1RJ10\"][value=\"True\"]", "rows": [ { "var": "checkboxes_other_1", "value": "checkbox_other_1_opt_1", "checked": false }, { "var": "checkboxes_other_1", "value": "r\u0017���1��az����m�", "checked": false } ] },
    "table": { "var": "checkboxes_other_1", "value": "checkbox_other_1_opt_1", "checked": false },
  },
  {
    "field": { "tag": "input", "type": "checkbox", "selector": "input[name=\"Y2hlY2tib3hlc19vdGhlcl8xW0InWTJobFkydGliM2hmYjNSb1pYSmZNVjl2Y0hSZk1nJ10\"][value=\"True\"]", "rows": [ { "var": "checkboxes_other_1", "value": "checkbox_other_1_opt_2", "checked": false }, { "var": "checkboxes_other_1", "value": "r\u0017���1��az����m�", "checked": false } ] },
    "table": { "var": "checkboxes_other_1", "value": "checkbox_other_1_opt_2", "checked": true },
  },
  {
    "field": { "tag": "input", "type": "checkbox", "selector": "input[name=\"Y2hlY2tib3hlc19vdGhlcl8xW0InWTJobFkydGliM2hmYjNSb1pYSmZNVjl2Y0hSZk13J10\"][value=\"True\"]", "rows": [ { "var": "checkboxes_other_1", "value": "checkbox_other_1_opt_3", "checked": false }, { "var": "checkboxes_other_1", "value": "r\u0017���1��az����m�", "checked": false } ] },
    "table": { "var": "checkboxes_other_1", "value": "checkbox_other_1_opt_3", "checked": false },
  },
  {
    "field": { "tag": "input", "type": "checkbox", "selector": "input[name=\"_ignore1\"]", "rows": [ { "var": "checkboxes_other_1", "value": "None", "checked": false } ] },
    "table": { "var": "checkboxes_other_1", "value": "None", "checked": false },
  },
  {
    "field": { "tag": "input", "type": "checkbox", "selector": "input[name=\"Y2hlY2tib3hlc19vdGhlcl8yW0InWTJobFkydGliM2hmYjNSb1pYSmZNbDl2Y0hSZk1RJ10\"][value=\"True\"]", "rows": [ { "var": "checkboxes_other_2", "value": "checkbox_other_2_opt_1", "checked": false }, { "var": "checkboxes_other_2", "value": "r\u0017���1��az����m�", "checked": false } ] },
    "table": { "var": "checkboxes_other_2", "value": "checkbox_other_2_opt_1", "checked": false },
  },
  {
    "field": { "tag": "input", "type": "checkbox", "selector": "input[name=\"Y2hlY2tib3hlc19vdGhlcl8yW0InWTJobFkydGliM2hmYjNSb1pYSmZNbDl2Y0hSZk1nJ10\"][value=\"True\"]", "rows": [ { "var": "checkboxes_other_2", "value": "checkbox_other_2_opt_2", "checked": false }, { "var": "checkboxes_other_2", "value": "r\u0017���1��az����m�", "checked": false } ] },
    "table": { "var": "checkboxes_other_2", "value": "checkbox_other_2_opt_2", "checked": false },
  },
  {
    "field": { "tag": "input", "type": "checkbox", "selector": "input[name=\"Y2hlY2tib3hlc19vdGhlcl8yW0InWTJobFkydGliM2hmYjNSb1pYSmZNbDl2Y0hSZk13J10\"][value=\"True\"]", "rows": [ { "var": "checkboxes_other_2", "value": "checkbox_other_2_opt_3", "checked": false }, { "var": "checkboxes_other_2", "value": "r\u0017���1��az����m�", "checked": false } ] },
    "table": { "var": "checkboxes_other_2", "value": "checkbox_other_2_opt_3", "checked": false },
  },
  {
    "field": { "tag": "input", "type": "checkbox", "selector": "input[name=\"_ignore2\"]", "rows": [ { "var": "checkboxes_other_2", "value": "None", "checked": false } ] },
    "table": { "var": "checkboxes_other_2", "value": "None", "checked": true },
  },
  {
    "field": { "tag": "input", "type": "radio", "selector": "input[name=\"cmFkaW9feWVzbm8\"][value=\"False\"]", "rows": [ { "var": "radio_yesno", "value": "False", "checked": false } ] },
    "table": { "var": "radio_yesno", "value": "False", "checked": true },
  },
  {
    "field": { "tag": "input", "type": "radio", "selector": "input[name=\"cmFkaW9fb3RoZXI\"][value=\"radio_other_opt_2\"]", "rows": [ { "var": "radio_other", "value": "radio_other_opt_2", "checked": false } ] },
    "table": { "var": "radio_other", "value": "radio_other_opt_2", "checked": true },
  },
  {
    "field": { "tag": "input", "type": "text", "selector": "input[name=\"dGV4dF9pbnB1dA\"]", "rows": [ { "var": "text_input", "value": "", "checked": "" } ] },
    "table": { "var": "text_input", "value": "Some one-line text", "checked": "" },
  },
  {
    "field": { "tag": "textarea", "type": "", "selector": "textarea[name=\"dGV4dGFyZWE\"]", "rows": [ { "var": "textarea", "value": "", "checked": "" } ] },
    "table": { "var": "textarea", "value": "Some\nmulti-line\ntext", "checked": "" },
  },
  {
    "field": { "tag": "select", "type": "", "selector": "select[name=\"ZHJvcGRvd25fdGVzdA\"]", "rows": [ { "var": "dropdown_test", "value": "", "checked": false }, { "var": "dropdown_test", "value": "dropdown_opt_1", "checked": false }, { "var": "dropdown_test", "value": "dropdown_opt_2", "checked": false }, { "var": "dropdown_test", "value": "dropdown_opt_3", "checked": false } ] },
    "table": { "var": "dropdown_test", "value": "dropdown_opt_2", "checked": true },
  },
  {
    "field": { "tag": "button", "type": "submit", "selector": "button[name=\"ZGlyZWN0X3N0YW5kYXJkX2ZpZWxkcw\"][value=\"True\"]", "rows": [ { "var": "direct_standard_fields", "value": "True", "checked": false } ] },
    "table": { "var": "direct_standard_fields", "value": "True", "checked": false },  // May want to fix this
  },
];


// ============================
// Simple show if fields - no proxies
// ============================
matches.show_if = [
  {
    "field": { "tag": "input", "type": "checkbox", "selector": "input[name=\"c2hvd18y\"][value=\"True\"]", "rows": [ { "var": "show_2", "value": "True", "checked": false }], },
    "table": { "var": "show_2", "value": "True", "checked": true, },
  },
  {
    "field": { "tag": "input", "type": "checkbox", "selector": "input[name=\"X2ZpZWxkXzE\"][value=\"True\"]", "rows": [ { "var": "show_3", "value": "True", "checked": false }], },
    "table": { "var": "show_3", "value": "True", "checked": false, },
  },
  {
    "field": { "tag": "input", "type": "checkbox", "selector": "input[name=\"X2ZpZWxkXzI\"][value=\"True\"]", "rows": [ { "var": "showif_checkbox_yesno", "value": "True", "checked": false }], },
    "table": { "var": "showif_checkbox_yesno", "value": "True", "checked": true, },
  },
  {
    "field": { "tag": "input", "type": "checkbox", "selector": "input[name=\"X2ZpZWxkXzNbQidjMmh2ZDJsbVgyTm9aV05yWW05NFpYTmZibTkwWVY4eCdd\"][value=\"True\"]", "rows": [ { "var": "showif_checkboxes_other", "value": "showif_checkboxes_nota_1", "checked": false }, { "var": "showif_checkboxes_other", "value": "�\u001a0��܅�$n�^��赯�", "checked": false }], },
    "table": { "var": "showif_checkboxes_other", "value": "showif_checkboxes_nota_1", "checked": false, },
  },
  {
    "field": { "tag": "input", "type": "checkbox", "selector": "input[name=\"X2ZpZWxkXzNbQidjMmh2ZDJsbVgyTm9aV05yWW05NFpYTmZibTkwWVY4eSdd\"][value=\"True\"]", "rows": [ { "var": "showif_checkboxes_other", "value": "showif_checkboxes_nota_2", "checked": false }, { "var": "showif_checkboxes_other", "value": "�\u001a0��܅�$n�^��赯�", "checked": false }], },
    "table": { "var": "showif_checkboxes_other", "value": "showif_checkboxes_nota_2", "checked": true, },
  },
  {
    "field": { "tag": "input", "type": "checkbox", "selector": "input[name=\"_ignore3\"]", "rows": [ { "var": "showif_checkboxes_other", "value": "None", "checked": false }], },
    "table": { "var": "showif_checkboxes_other", "value": "None", "checked": false, },
  },
  {
    "field": { "tag": "input", "type": "radio", "selector": "input[name=\"X2ZpZWxkXzQ\"][value=\"False\"]", "rows": [ { "var": "showif_yesnoradio", "value": "False", "checked": false }], },
    "table": { "var": "showif_yesnoradio", "value": "False", "checked": true, },
  },
  {
    "field": { "tag": "input", "type": "radio", "selector": "input[name=\"X2ZpZWxkXzU\"][value=\"showif_radio_multi_2\"]", "rows": [ { "var": "showif_radio_other", "value": "showif_radio_multi_2", "checked": false }], },
    "table": { "var": "showif_radio_other", "value": "showif_radio_multi_2", "checked": true, },
  },
  {
    "field": { "tag": "input", "type": "text", "selector": "input[name=\"X2ZpZWxkXzY\"]", "rows": [ { "var": "showif_text_input", "value": "", "checked": "" }], },
    "table": { "var": "showif_text_input", "value": "Some one-line text in show if input", "checked": "", },
  },
  {
    "field": { "tag": "textarea", "type": "", "selector": "textarea[name=\"X2ZpZWxkXzc\"]", "rows": [ { "var": "showif_textarea", "value": "", "checked": "" }], },
    "table": { "var": "showif_textarea", "value": "Some\nmulti-line\ntext in show if textarea", "checked": "", },
  },
  {
    "field": { "tag": "select", "type": "", "selector": "select[name=\"X2ZpZWxkXzg\"]", "rows": [ { "var": "showif_dropdown", "value": "", "checked": false }, { "var": "showif_dropdown", "value": "showif_dropdown_1", "checked": false }, { "var": "showif_dropdown", "value": "showif_dropdown_2", "checked": false }, { "var": "showif_dropdown", "value": "showif_dropdown_3", "checked": false }], },
    "table": { "var": "showif_dropdown", "value": "showif_dropdown_2", "checked": true, },
  },
  {
    "field": { "tag": "button", "type": "submit", "selector": "button[name=\"ZGlyZWN0X3Nob3dpZnM\"][value=\"True\"]", "rows": [ { "var": "direct_showifs", "value": "True", "checked": false }], },
    "table": { "var": "direct_showifs", "value": "True", "checked": true, },
  },
];


// ============================
// Buttons
// ============================
// `continue button field:`
matches.button_continue = [
  {
    "field": { "selector": "button[name=\"YnV0dG9uX2NvbnRpbnVl\"][value=\"True\"]", "tag": "button", "rows": [ { "var": "button_continue", "value": "True", "checked": false } ], "type": "submit" },
    "table": { "var": "button_continue", "value": "True", "checked": true, },
  }
];

// `yesnomaybe:`
matches.buttons_yesnomaybe_yes = [
  {
  "field": { "selector": "button[name=\"YnV0dG9uc195ZXNub21heWJl\"][value=\"True\"]", "tag": "button", "rows": [ { "var": "buttons_yesnomaybe", "value": "True", "checked": false, } ], "type": "submit" },
  "table": { "var": "buttons_yesnomaybe", "value": "True", "checked": true, },
  }
];
matches.buttons_yesnomaybe_no = [
  {
  "field": { "selector": "button[name=\"YnV0dG9uc195ZXNub21heWJl\"][value=\"False\"]", "tag": "button", "rows": [ { "var": "buttons_yesnomaybe", "value": "False", "checked": false, } ], "type": "submit" },
  "table": { "var": "buttons_yesnomaybe", "value": "False", "checked": true, },
  }
];
matches.buttons_yesnomaybe_none = [
  {
  "field": { "selector": "button[name=\"YnV0dG9uc195ZXNub21heWJl\"][value=\"None\"]", "tag": "button", "rows": [ { "var": "buttons_yesnomaybe", "value": "None", "checked": false, } ], "type": "submit" },
  "table": { "var": "buttons_yesnomaybe", "value": "None", "checked": true, },
  }
];

// `field:` and `buttons:`
matches.buttons_other_1 = [
  {
  "field": { "selector": "button[name=\"YnV0dG9uc19vdGhlcg\"][value=\"button_1\"]", "tag": "button", "rows": [ { "var": "buttons_other", "value": "button_1", "checked": false, } ], "type": "submit" },
  "table": { "var": "buttons_other", "value": "button_1", "checked": true, },
  }
];
matches.buttons_other_2 = [
  {
  "field": { "selector": "button[name=\"YnV0dG9uc19vdGhlcg\"][value=\"button_2\"]", "tag": "button", "rows": [ { "var": "buttons_other", "value": "button_2", "checked": false, } ], "type": "submit" },
  "table": { "var": "buttons_other", "value": "button_2", "checked": true, },
  }
];
matches.buttons_other_3 = [
  {
  "field": { "selector": "button[name=\"YnV0dG9uc19vdGhlcg\"][value=\"button_3\"]", "tag": "button", "rows": [ { "var": "buttons_other", "value": "button_3", "checked": false, } ], "type": "submit" },
  "table": { "var": "buttons_other", "value": "button_3", "checked": true, },
  }
];

// `field:` and `action buttons:`
matches.buttons_event_action = [
  {
    "field":{"selector":"a[data-linknum=\"1\"]","tag":"a","rows":[{"var":"end","value":"","checked":""}],"type":""},
    "table":{"var":"end","value":"","checked":""}
  }
];


module.exports = matches;