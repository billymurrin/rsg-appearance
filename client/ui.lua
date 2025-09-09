local uiOpen = false

RegisterCommand('appearanceui', function()
    uiOpen = not uiOpen
    SetNuiFocus(uiOpen, uiOpen)
    SendNUIMessage({ action = uiOpen and 'open' or 'close' })
end)

RegisterNUICallback('close', function(_, cb)
    uiOpen = false
    SetNuiFocus(false, false)
    cb('ok')
end)
