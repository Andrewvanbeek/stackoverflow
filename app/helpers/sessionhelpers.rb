helpers do
  def ongoing_session
    session[:user_id] != nil
  end

  def redirect_non_users
    if !ongoing_session
      redirect "/"
    end
  end


end