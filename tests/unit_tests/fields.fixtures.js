let fields =  {};

// ============================
// Standard fields - no proxies, no showifs.
// ============================
// TODO: Add more complex fields. E.g `object_checkboxes` and dropdown with `object`.
fields.standard = [
    {
      "trigger": "direct_standard_fields",
      "selector": "#daquestion input[name=\"Y2hlY2tib3hlc195ZXNubw\"][value=\"True\"][id=\"Y2hlY2tib3hlc195ZXNubw\"][class=\"da-to-labelauty checkbox-icon dauncheckable labelauty da-active-invisible dafullwidth\"]",
      "tag": "input",
      "guesses": [
        { "var": "checkboxes_yesno", "value": "True" }
      ],
      "type": "checkbox"
    },
    {
      "trigger": "direct_standard_fields",
      "selector": "#daquestion input[name=\"Y2hlY2tib3hlc19vdGhlcl8xW0InWTJobFkydGliM2hmYjNSb1pYSmZNVjl2Y0hSZk1RJ10\"][value=\"True\"][id=\"Y2hlY2tib3hlc19vdGhlcl8x_0\"][class=\"dafield1 danon-nota-checkbox da-to-labelauty checkbox-icon labelauty da-active-invisible dafullwidth\"]",
      "tag": "input",
      "guesses": [
        { "var": "checkboxes_other_1['checkbox_other_1_opt_1']", "value": "True" },
        { "var": "checkboxes_other_1['r\u0017���1��az����m�']", "value": "True" }
      ],
      "type": "checkbox"
    },
    {
      "trigger": "direct_standard_fields",
      "selector": "#daquestion input[name=\"Y2hlY2tib3hlc19vdGhlcl8xW0InWTJobFkydGliM2hmYjNSb1pYSmZNVjl2Y0hSZk1nJ10\"][value=\"True\"][id=\"Y2hlY2tib3hlc19vdGhlcl8x_1\"][class=\"dafield1 danon-nota-checkbox da-to-labelauty checkbox-icon labelauty da-active-invisible dafullwidth\"]",
      "tag": "input",
      "guesses": [
        { "var": "checkboxes_other_1['checkbox_other_1_opt_2']", "value": "True" },
        { "var": "checkboxes_other_1['r\u0017���1��az����m�']", "value": "True" }
      ],
      "type": "checkbox"
    },
    {
      "trigger": "direct_standard_fields",
      "selector": "#daquestion input[name=\"Y2hlY2tib3hlc19vdGhlcl8xW0InWTJobFkydGliM2hmYjNSb1pYSmZNVjl2Y0hSZk13J10\"][value=\"True\"][id=\"Y2hlY2tib3hlc19vdGhlcl8x_2\"][class=\"dafield1 danon-nota-checkbox da-to-labelauty checkbox-icon labelauty da-active-invisible dafullwidth\"]",
      "tag": "input",
      "guesses": [
        { "var": "checkboxes_other_1['checkbox_other_1_opt_3']", "value": "True" },
        { "var": "checkboxes_other_1['r\u0017���1��az����m�']", "value": "True" }
      ],
      "type": "checkbox"
    },
    {
      "trigger": "direct_standard_fields",
      "selector": "#daquestion input[name=\"_ignore1\"][id=\"labelauty-712020\"][class=\"dafield1 danota-checkbox da-to-labelauty checkbox-icon labelauty da-active-invisible dafullwidth\"]",
      "tag": "input",
      "guesses": [
        { "var": "checkboxes_other_1['None']", "value": "" }
      ],
      "type": "checkbox"
    },
    {
      "trigger": "direct_standard_fields",
      "selector": "#daquestion input[name=\"Y2hlY2tib3hlc19vdGhlcl8yW0InWTJobFkydGliM2hmYjNSb1pYSmZNbDl2Y0hSZk1RJ10\"][value=\"True\"][id=\"Y2hlY2tib3hlc19vdGhlcl8y_0\"][class=\"dafield2 danon-nota-checkbox da-to-labelauty checkbox-icon labelauty da-active-invisible dafullwidth\"]",
      "tag": "input",
      "guesses": [
        { "var": "checkboxes_other_2['checkbox_other_2_opt_1']", "value": "True" },
        { "var": "checkboxes_other_2['r\u0017���1��az����m�']", "value": "True" }
      ],
      "type": "checkbox"
    },
    {
      "trigger": "direct_standard_fields",
      "selector": "#daquestion input[name=\"Y2hlY2tib3hlc19vdGhlcl8yW0InWTJobFkydGliM2hmYjNSb1pYSmZNbDl2Y0hSZk1nJ10\"][value=\"True\"][id=\"Y2hlY2tib3hlc19vdGhlcl8y_1\"][class=\"dafield2 danon-nota-checkbox da-to-labelauty checkbox-icon labelauty da-active-invisible dafullwidth\"]",
      "tag": "input",
      "guesses": [
        { "var": "checkboxes_other_2['checkbox_other_2_opt_2']", "value": "True" },
        { "var": "checkboxes_other_2['r\u0017���1��az����m�']", "value": "True" }
      ],
      "type": "checkbox"
    },
    {
      "trigger": "direct_standard_fields",
      "selector": "#daquestion input[name=\"Y2hlY2tib3hlc19vdGhlcl8yW0InWTJobFkydGliM2hmYjNSb1pYSmZNbDl2Y0hSZk13J10\"][value=\"True\"][id=\"Y2hlY2tib3hlc19vdGhlcl8y_2\"][class=\"dafield2 danon-nota-checkbox da-to-labelauty checkbox-icon labelauty da-active-invisible dafullwidth\"]",
      "tag": "input",
      "guesses": [
        { "var": "checkboxes_other_2['checkbox_other_2_opt_3']", "value": "True" },
        { "var": "checkboxes_other_2['r\u0017���1��az����m�']", "value": "True" }
      ],
      "type": "checkbox"
    },
    {
      "trigger": "direct_standard_fields",
      "selector": "#daquestion input[name=\"_ignore2\"][id=\"labelauty-344271\"][class=\"dafield2 danota-checkbox da-to-labelauty checkbox-icon labelauty da-active-invisible dafullwidth\"]",
      "tag": "input",
      "guesses": [
        { "var": "checkboxes_other_2['None']", "value": "" }
      ],
      "type": "checkbox"
    },
    {
      "trigger": "direct_standard_fields",
      "selector": "#daquestion input[name=\"cmFkaW9feWVzbm8\"][value=\"True\"][id=\"cmFkaW9feWVzbm8_0\"][class=\"da-to-labelauty labelauty da-active-invisible dafullwidth\"]",
      "tag": "input",
      "guesses": [
        { "var": "radio_yesno", "value": "True" }
      ],
      "type": "radio"
    },
    {
      "trigger": "direct_standard_fields",
      "selector": "#daquestion input[name=\"cmFkaW9feWVzbm8\"][value=\"False\"][id=\"cmFkaW9feWVzbm8_1\"][class=\"da-to-labelauty labelauty da-active-invisible dafullwidth\"]",
      "tag": "input",
      "guesses": [
        { "var": "radio_yesno", "value": "False" }
      ],
      "type": "radio"
    },
    {
      "trigger": "direct_standard_fields",
      "selector": "#daquestion input[name=\"cmFkaW9fb3RoZXI\"][value=\"radio_other_opt_1\"][id=\"cmFkaW9fb3RoZXI_0\"][class=\"da-to-labelauty labelauty da-active-invisible dafullwidth\"]",
      "tag": "input",
      "guesses": [
        { "var": "radio_other", "value": "radio_other_opt_1" }
      ],
      "type": "radio"
    },
    {
      "trigger": "direct_standard_fields",
      "selector": "#daquestion input[name=\"cmFkaW9fb3RoZXI\"][value=\"radio_other_opt_2\"][id=\"cmFkaW9fb3RoZXI_1\"][class=\"da-to-labelauty labelauty da-active-invisible dafullwidth\"]",
      "tag": "input",
      "guesses": [
        { "var": "radio_other", "value": "radio_other_opt_2" }
      ],
      "type": "radio"
    },
    {
      "trigger": "direct_standard_fields",
      "selector": "#daquestion input[name=\"cmFkaW9fb3RoZXI\"][value=\"radio_other_opt_3\"][id=\"cmFkaW9fb3RoZXI_2\"][class=\"da-to-labelauty labelauty da-active-invisible dafullwidth\"]",
      "tag": "input",
      "guesses": [
        { "var": "radio_other", "value": "radio_other_opt_3" }
      ],
      "type": "radio"
    },
    {
      "trigger": "direct_standard_fields",
      "selector": "#daquestion input[name=\"dGV4dF9pbnB1dA\"][id=\"dGV4dF9pbnB1dA\"][class=\"form-control\"]",
      "tag": "input",
      "guesses": [
        { "var": "text_input", "value": "" }
      ],
      "type": "text"
    },
    {
      "trigger": "direct_standard_fields",
      "selector": "#daquestion textarea[name=\"dGV4dGFyZWE\"][id=\"dGV4dGFyZWE\"][class=\"form-control\"]",
      "tag": "textarea",
      "guesses": [
        { "var": "textarea", "value": "" }
      ],
      "type": ""
    },
    {
      "trigger": "direct_standard_fields",
      "selector": "#daquestion select[name=\"ZHJvcGRvd25fdGVzdA\"][id=\"ZHJvcGRvd25fdGVzdA\"][class=\"form-control\"]",
      "tag": "select",
      "guesses": [
        { "var": "dropdown_test", "value": "" },
        { "var": "dropdown_test", "value": "" },
        { "var": "dropdown_test", "value": "dropdown_opt_1" },
        { "var": "dropdown_test", "value": "v�)v�'��m�" },
        { "var": "dropdown_test", "value": "dropdown_opt_2" },
        { "var": "dropdown_test", "value": "v�)v�'��m�" },
        { "var": "dropdown_test", "value": "dropdown_opt_3" },
        { "var": "dropdown_test", "value": "v�)v�'��m�" }
      ],
      "type": ""
    },
    {
      "trigger": "direct_standard_fields",
      "selector": "#daquestion button[name=\"ZGlyZWN0X3N0YW5kYXJkX2ZpZWxkcw\"][value=\"True\"][class=\"btn btn-da btn-primary\"]",
      "tag": "button",
      "guesses": [
        { "var": "direct_standard_fields", "value": "True" }
      ],
      "type": "submit"
    }
  ];  // ends fields.standard


// ============================
// Simple show if fields - no proxies
// ============================
fields.show_if = [
    {
      "trigger": "direct_showifs",
      "selector": "#daquestion input[name=\"c2hvd18y\"][value=\"True\"][id=\"c2hvd18y\"][class=\"da-to-labelauty checkbox-icon dauncheckable labelauty da-active-invisible dafullwidth\"]",
      "tag": "input",
      "guesses": [
        { "var": "show_2", "value": "True" }
      ],
      "type": "checkbox"
    },
    {
      "trigger": "direct_showifs",
      "selector": "#daquestion input[name=\"X2ZpZWxkXzE\"][value=\"True\"][id=\"X2ZpZWxkXzE\"][class=\"da-to-labelauty checkbox-icon dauncheckable labelauty da-active-invisible dafullwidth\"]",
      "tag": "input",
      "guesses": [
        { "var": "show_3", "value": "True" }
      ],
      "type": "checkbox"
    },
    {
      "trigger": "direct_showifs",
      "selector": "#daquestion input[name=\"X2ZpZWxkXzI\"][value=\"True\"][id=\"X2ZpZWxkXzI\"][class=\"da-to-labelauty checkbox-icon dauncheckable labelauty da-active-invisible dafullwidth\"]",
      "tag": "input",
      "guesses": [
        { "var": "showif_checkbox_yesno", "value": "True" }
      ],
      "type": "checkbox"
    },
    {
      "trigger": "direct_showifs",
      "selector": "#daquestion input[name=\"X2ZpZWxkXzNbQidjMmh2ZDJsbVgyTm9aV05yWW05NFpYTmZibTkwWVY4eCdd\"][value=\"True\"][id=\"X2ZpZWxkXzM_0\"][class=\"dafield3 danon-nota-checkbox da-to-labelauty checkbox-icon labelauty da-active-invisible dafullwidth\"]",
      "tag": "input",
      "guesses": [
        { "var": "showif_checkboxes_other['showif_checkboxes_nota_1']", "value": "True" },
        { "var": "showif_checkboxes_other['�\u001a0��܅�$n�^��赯�']", "value": "True" }
      ],
      "type": "checkbox"
    },
    {
      "trigger": "direct_showifs",
      "selector": "#daquestion input[name=\"X2ZpZWxkXzNbQidjMmh2ZDJsbVgyTm9aV05yWW05NFpYTmZibTkwWVY4eSdd\"][value=\"True\"][id=\"X2ZpZWxkXzM_1\"][class=\"dafield3 danon-nota-checkbox da-to-labelauty checkbox-icon labelauty da-active-invisible dafullwidth\"]",
      "tag": "input",
      "guesses": [
        { "var": "showif_checkboxes_other['showif_checkboxes_nota_2']", "value": "True" },
        { "var": "showif_checkboxes_other['�\u001a0��܅�$n�^��赯�']", "value": "True" }
      ],
      "type": "checkbox"
    },
    {
      "trigger": "direct_showifs",
      "selector": "#daquestion input[name=\"_ignore3\"][id=\"labelauty-473746\"][class=\"dafield3 danota-checkbox da-to-labelauty checkbox-icon labelauty da-active-invisible dafullwidth\"]",
      "tag": "input",
      "guesses": [
        { "var": "showif_checkboxes_other['None']", "value": "" }
      ],
      "type": "checkbox"
    },
    {
      "trigger": "direct_showifs",
      "selector": "#daquestion input[name=\"X2ZpZWxkXzQ\"][value=\"True\"][id=\"X2ZpZWxkXzQ_0\"][class=\"da-to-labelauty labelauty da-active-invisible dafullwidth\"]",
      "tag": "input",
      "guesses": [
        { "var": "showif_yesnoradio", "value": "True" }
      ],
      "type": "radio"
    },
    {
      "trigger": "direct_showifs",
      "selector": "#daquestion input[name=\"X2ZpZWxkXzQ\"][value=\"False\"][id=\"X2ZpZWxkXzQ_1\"][class=\"da-to-labelauty labelauty da-active-invisible dafullwidth\"]",
      "tag": "input",
      "guesses": [
        { "var": "showif_yesnoradio", "value": "False" }
      ],
      "type": "radio"
    },
    {
      "trigger": "direct_showifs",
      "selector": "#daquestion input[name=\"X2ZpZWxkXzU\"][value=\"showif_radio_multi_1\"][id=\"X2ZpZWxkXzU_0\"][class=\"da-to-labelauty labelauty da-active-invisible dafullwidth\"]",
      "tag": "input",
      "guesses": [
        { "var": "showif_radio_other", "value": "showif_radio_multi_1" }
      ],
      "type": "radio"
    },
    {
      "trigger": "direct_showifs",
      "selector": "#daquestion input[name=\"X2ZpZWxkXzU\"][value=\"showif_radio_multi_2\"][id=\"X2ZpZWxkXzU_1\"][class=\"da-to-labelauty labelauty da-active-invisible dafullwidth\"]",
      "tag": "input",
      "guesses": [
        { "var": "showif_radio_other", "value": "showif_radio_multi_2" }
      ],
      "type": "radio"
    },
    {
      "trigger": "direct_showifs",
      "selector": "#daquestion input[name=\"X2ZpZWxkXzU\"][value=\"showif_radio_multi_3\"][id=\"X2ZpZWxkXzU_2\"][class=\"da-to-labelauty labelauty da-active-invisible dafullwidth\"]",
      "tag": "input",
      "guesses": [
        { "var": "showif_radio_other", "value": "showif_radio_multi_3" }
      ],
      "type": "radio"
    },
    {
      "trigger": "direct_showifs",
      "selector": "#daquestion input[name=\"X2ZpZWxkXzY\"][id=\"X2ZpZWxkXzY\"][class=\"form-control\"]",
      "tag": "input",
      "guesses": [
        { "var": "showif_text_input", "value": "" }
      ],
      "type": "text"
    },
    {
      "trigger": "direct_showifs",
      "selector": "#daquestion textarea[name=\"X2ZpZWxkXzc\"][id=\"X2ZpZWxkXzc\"][class=\"form-control\"]",
      "tag": "textarea",
      "guesses": [
        { "var": "showif_textarea", "value": "" }
      ],
      "type": ""
    },
    {
      "trigger": "direct_showifs",
      "selector": "#daquestion select[name=\"X2ZpZWxkXzg\"][id=\"X2ZpZWxkXzg\"][class=\"form-control\"]",
      "tag": "select",
      "guesses": [
        { "var": "showif_dropdown", "value": "" },
        { "var": "showif_dropdown", "value": "" },
        { "var": "showif_dropdown", "value": "showif_dropdown_1" },
        { "var": "showif_dropdown", "value": "�\u001a0��ݮ�]�\t�" },
        { "var": "showif_dropdown", "value": "showif_dropdown_2" },
        { "var": "showif_dropdown", "value": "�\u001a0��ݮ�]�\t�" },
        { "var": "showif_dropdown", "value": "showif_dropdown_3" },
        { "var": "showif_dropdown", "value": "�\u001a0��ݮ�]�\t�" }
      ],
      "type": ""
    },
    {
      "trigger": "direct_showifs",
      "selector": "#daquestion button[name=\"ZGlyZWN0X3Nob3dpZnM\"][value=\"True\"][class=\"btn btn-da btn-primary\"]",
      "tag": "button",
      "guesses": [
        { "var": "direct_showifs", "value": "True" }
      ],
      "type": "submit"
    }
  ];  // ends fields.show_if


// ============================
// Buttons
// ============================
// `continue button field:`
fields.button_continue = [
    {
      "trigger": "button_continue",
      "selector": "#daquestion button[name=\"YnV0dG9uX2NvbnRpbnVl\"][value=\"True\"][class=\"btn btn-da btn-primary\"]",
      "tag": "button",
      "guesses": [
        { "var": "button_continue", "value": "True" }
      ],
      "type": "submit"
    }
  ];

// `yesnomaybe:`
// TODO: Shall we allow 'maybe' in the table as a value for `None`?
fields.buttons_yesnomaybe = [
    {
      "trigger": "buttons_yesnomaybe",
      "selector": "#daquestion button[name=\"YnV0dG9uc195ZXNub21heWJl\"][value=\"True\"][class=\"btn btn-primary btn-da \"]",
      "tag": "button",
      "guesses": [
        { "var": "buttons_yesnomaybe", "value": "True" }
      ],
      "type": "submit"
    },
    {
      "trigger": "buttons_yesnomaybe",
      "selector": "#daquestion button[name=\"YnV0dG9uc195ZXNub21heWJl\"][value=\"False\"][class=\"btn btn-da btn-secondary\"]",
      "tag": "button",
      "guesses": [
        { "var": "buttons_yesnomaybe", "value": "False" }
      ],
      "type": "submit"
    },
    {
      "trigger": "buttons_yesnomaybe",
      "selector": "#daquestion button[name=\"YnV0dG9uc195ZXNub21heWJl\"][value=\"None\"][class=\"btn btn-da btn-warning\"]",
      "tag": "button",
      "guesses": [
        { "var": "buttons_yesnomaybe", "value": "None" }
      ],
      "type": "submit"
    }
  ];

// Multiple choice 'continue' button fields that are not yesnomaybe
// `field:` and `buttons:`
fields.buttons_other = [
    {
      "trigger": "buttons_other",
      "selector": "#daquestion button[name=\"YnV0dG9uc19vdGhlcg\"][value=\"button_1\"][class=\"btn btn-da btn-primary\"]",
      "tag": "button",
      "guesses": [
        { "var": "buttons_other", "value": "button_1" }
      ],
      "type": "submit"
    },
    {
      "trigger": "buttons_other",
      "selector": "#daquestion button[name=\"YnV0dG9uc19vdGhlcg\"][value=\"button_2\"][class=\"btn btn-da btn-primary\"]",
      "tag": "button",
      "guesses": [
        { "var": "buttons_other", "value": "button_2" }
      ],
      "type": "submit"
    },
    {
      "trigger": "buttons_other",
      "selector": "#daquestion button[name=\"YnV0dG9uc19vdGhlcg\"][value=\"button_3\"][class=\"btn btn-da btn-primary\"]",
      "tag": "button",
      "guesses": [
        { "var": "buttons_other", "value": "button_3" }
      ],
      "type": "submit"
    }
  ];

// `field:` and `action buttons:`
fields.buttons_event_action = [
    {
      "trigger": "button_event_action",
      "selector": "#daquestion button[name=\"YnV0dG9uX2V2ZW50X2FjdGlvbg\"][value=\"True\"][class=\"btn btn-da btn-primary\"]",
      "tag": "button",
      "guesses": [
        { "var": "button_event_action", "value": "True" }
      ],
      "type": "submit"
    },
    {
      "trigger": "button_event_action",
      "selector": "#daquestion a[class=\"btn btn-primary btn-da daquestionactionbutton danonsubmit\"][data-linknum=\"1\"]",
      "tag": "a",
      "guesses": [
        { "var": "end", "value": "" }
      ],
      "type": ""
    }
  ];


// ============================
// Proxy vars (x, i, j, ...)
// ============================
// x[i].name.first
fields.proxies_xi = [
    {
      "trigger": "a_list[0].name.first",
      "selector": "#daquestion input[name=\"eFtpXS5uYW1lLmZpcnN0\"][id=\"eFtpXS5uYW1lLmZpcnN0\"][class=\"form-control\"]",
      "tag": "input",
      "guesses": [
        { "var": "x[i].name.first", "value": "" }
      ],
      "type": "text"
    },
    {
      "trigger": "a_list[0].name.first",
      "selector": "#daquestion button[class=\"btn btn-da btn-primary\"]",
      "tag": "button",
      "guesses": [],
      "type": "submit"
    }
  ];

// Multiple proxies by the same name are on the list (because of a loop)
// x[i].name.first
fields.proxies_multi = [
    {
      "trigger": "a_list[0].name.first",
      "selector": "#daquestion input[name=\"eFtpXS5uYW1lLmZpcnN0\"][id=\"eFtpXS5uYW1lLmZpcnN0\"][class=\"form-control\"]",
      "tag": "input",
      "guesses": [
        { "var": "x[i].name.first", "value": "" }
      ],
      "type": "text"
    },
    {
      "trigger": "a_list[0].name.first",
      "selector": "#daquestion button[class=\"btn btn-da btn-primary\"]",
      "tag": "button",
      "guesses": [],
      "type": "submit"
    }
  ];

// your_past_benefits[i].still_receiving
// your_past_benefits['State Veterans Benefits'].still_receiving
// Non-match comes after a match
fields.proxies_non_match = [
    {
      "trigger": "your_past_benefits['State Veterans Benefits'].still_receiving",
      "selector": "#daquestion input[name=\"eW91cl9wYXN0X2JlbmVmaXRzW2ldLnN0YXJ0X2RhdGU\"][id=\"eW91cl9wYXN0X2JlbmVmaXRzW2ldLnN0YXJ0X2RhdGU\"][class=\"form-control is-invalid\"]",
      "tag": "input",
      "guesses": [
        { "var": "your_past_benefits[i].start_date", "value": "" }
      ],
      "type": "date"
    },
    {
      "trigger": "your_past_benefits['State Veterans Benefits'].still_receiving",
      "selector": "#daquestion input[name=\"eW91cl9wYXN0X2JlbmVmaXRzW2ldLnN0aWxsX3JlY2VpdmluZw\"][value=\"True\"][id=\"eW91cl9wYXN0X2JlbmVmaXRzW2ldLnN0aWxsX3JlY2VpdmluZw_0\"][class=\"da-to-labelauty labelauty da-active-invisible dafullwidth is-invalid\"]",
      "tag": "input",
      "guesses": [
        { "var": "your_past_benefits[i].still_receiving", "value": "True" }
      ],
      "type": "radio"
    },
    {
      "trigger": "your_past_benefits['State Veterans Benefits'].still_receiving",
      "selector": "#daquestion input[name=\"eW91cl9wYXN0X2JlbmVmaXRzW2ldLnN0aWxsX3JlY2VpdmluZw\"][value=\"False\"][id=\"eW91cl9wYXN0X2JlbmVmaXRzW2ldLnN0aWxsX3JlY2VpdmluZw_1\"][class=\"da-to-labelauty labelauty da-active-invisible dafullwidth\"]",
      "tag": "input",
      "guesses": [
        { "var": "your_past_benefits[i].still_receiving", "value": "False" }
      ],
      "type": "radio"
    },
    {
      "trigger": "your_past_benefits['State Veterans Benefits'].still_receiving",
      "selector": "#daquestion input[name=\"X2ZpZWxkXzM\"][id=\"X2ZpZWxkXzM\"][class=\"form-control\"]",
      "tag": "input",
      "guesses": [
        { "var": "your_past_benefits[i].end_date", "value": "" }
      ],
      "type": "date"
    },
    {
      "trigger": "your_past_benefits['State Veterans Benefits'].still_receiving",
      "selector": "#daquestion button[class=\"btn btn-da btn-primary\"]",
      "tag": "button",
      "guesses": [],
      "type": "submit"
    }
  ];


// ============================
// Signature
// ============================
fields.signature = [
    {
      "trigger": "signature_1",
      "selector": "#daquestion canvas",
      "tag": "canvas",
      "guesses": [
        {
          "var": "signature_1",
          "value": "/sign",
        }
      ],
      "type": ""
    },
    // Signature page continue buttons are in a `div.dasigbuttons`, not in a `fieldset`
  ];


// ============================
// `choices:`
// ============================
// `field:` and `choices:`
fields.choices = [
    {
      "trigger": "cs_arrears_mc",
      "selector": "#daquestion input[name=\"Y3NfYXJyZWFyc19tYw\"][value=\"Yes\"][id=\"Y3NfYXJyZWFyc19tYw_0\"][class=\"da-to-labelauty labelauty da-active-invisible dafullwidth is-invalid\"]",
      "tag": "input",
      "guesses": [
        { "var": "cs_arrears_mc", "value": "Yes" }
      ],
      "type": "radio"
    },
    {
      "trigger": "cs_arrears_mc",
      "selector": "#daquestion input[name=\"Y3NfYXJyZWFyc19tYw\"][value=\"No\"][id=\"Y3NfYXJyZWFyc19tYw_1\"][class=\"da-to-labelauty labelauty da-active-invisible dafullwidth\"]",
      "tag": "input",
      "guesses": [
        { "var": "cs_arrears_mc", "value": "No" }
      ],
      "type": "radio"
    },
    {
      "trigger": "cs_arrears_mc",
      "selector": "#daquestion input[name=\"Y3NfYXJyZWFyc19tYw\"][value=\"I am not sure\"][id=\"Y3NfYXJyZWFyc19tYw_2\"][class=\"da-to-labelauty labelauty da-active-invisible dafullwidth\"]",
      "tag": "input",
      "guesses": [
        { "var": "cs_arrears_mc", "value": "I am not sure" }
      ],
      "type": "radio"
    },
    {
      "trigger": "cs_arrears_mc",
      "selector": "#daquestion button[class=\"btn btn-da btn-primary\"]",
      "tag": "button",
      "guesses": [],
      "type": "submit"
    }
  ];


// ============================
// dropdowns created with objects
// ============================
// ```
// - Something: some_var
//   datatype: object
//   object labeler: |
//     lambda y: y.short_label()```
//   choices: some_obj
// ```
fields.object_dropdown =  [
    {
      "trigger": "trial_court",
      "selector": "#daquestion select[name=\"dHJpYWxfY291cnQ\"][id=\"dHJpYWxfY291cnQ\"][class=\"form-control daobject\"]",
      "tag": "select",
      "guesses": [
        { "var": "trial_court", "value": "" },
        { "var": "trial_court", "value": "" },
        { "var": "trial_court", "value": "YWxsX2NvdXJ0c1swXQ" },
        { "var": "trial_court", "value": "all_courts[0]" },
        { "var": "trial_court", "value": "YWxsX2NvdXJ0c1syXQ" },
        { "var": "trial_court", "value": "all_courts[2]" },
        { "var": "trial_court", "value": "YWxsX2NvdXJ0c1szXQ" },
        { "var": "trial_court", "value": "all_courts[3]" }
      ],
      "type": ""
    },
    {
      "trigger": "trial_court",
      "selector": "#daquestion button[class=\"btn btn-link btn-da daquestionbackbutton danonsubmit\"]",
      "tag": "button",
      "guesses": [],
      "type": "button"
    },
    {
      "trigger": "trial_court",
      "selector": "#daquestion button[class=\"btn btn-da btn-primary\"]",
      "tag": "button",
      "guesses": [],
      "type": "submit"
    }
  ];


module.exports = fields;