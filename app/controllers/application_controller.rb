class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  include SessionsHelper

  def flash_messages
    flash.map do |type, text|
      { id: text.object_id, type: type, text: text }
    end
  end
end
