gemini.suite('basic', (suite) => {
  suite.setUrl('/')
    .setCaptureElements('.swal2-modal')
    .capture('html-content', (actions, find) => {
      actions.click(find('.html button'))
      actions.wait(300)
    })
})

gemini.suite('ajax-request', (suite) => {
  suite.setUrl('/')
    .setCaptureElements('.swal2-modal')
    .capture('validation-error', (actions, find) => {
      actions.click(find('.ajax-request button'))
      actions.sendKeys(find('.swal2-input'), 'taken@example.com')
      actions.click(find('.swal2-confirm'))
      actions.wait(3000)
    })
    .capture('success', (actions, find) => {
      actions.sendKeys(find('.swal2-input'), gemini.BACK_SPACE)
      actions.wait(100)
      actions.click(find('.swal2-confirm'))
      actions.wait(3000)
    })
})

gemini.suite('chaining-modals', (suite) => {
  suite.setUrl('/')
    .setCaptureElements('.swal2-modal')
    .capture('step 1', (actions, find) => {
      actions.click(find('.chaining-modals button'))
      actions.sendKeys(find('.swal2-input'), 'uno')
      actions.wait(300)
    })
    .capture('step 2', (actions, find) => {
      actions.click(find('.swal2-confirm'))
      actions.sendKeys(find('.swal2-input'), 'dos')
      actions.wait(300)
    })
    .capture('step 3', (actions, find) => {
      actions.click(find('.swal2-confirm'))
      actions.sendKeys(find('.swal2-input'), 'tres')
      actions.wait(300)
    })
    .capture('confirm', (actions, find) => {
      actions.click(find('.swal2-confirm'))
      actions.wait(300)
    })
})
