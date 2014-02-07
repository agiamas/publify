Recaptcha.configure do |config|
  config.public_key  = '6LfgRe4SAAAAAMgSp-Y7kJ8MGjRB_1M3AyFiCn5e'
  config.private_key = ENV['RECAPTCHA_PRIVATE_KEY']
end
