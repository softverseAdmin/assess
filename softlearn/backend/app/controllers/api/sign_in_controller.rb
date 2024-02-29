class Api::SignInController < ApplicationController
      # POST /api/sing_in/index
    def index
        render json: { account_type: "saas", email: "asdas", message: "Account created successfully" }
    end
end
