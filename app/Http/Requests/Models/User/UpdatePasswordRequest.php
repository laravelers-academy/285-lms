<?php

namespace App\Http\Requests\Models\User;

use App\Models\User;
use App\Rules\MatchOldPassword;
use Illuminate\Foundation\Http\FormRequest;

class UpdatePasswordRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {

        $user = User::findOrFail($this->user_id);

        return $this->user()->can('updatePassword', $user);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'current_password' => [
                'required',
                new MatchOldPassword(User::find($this->user_id))
            ],
            'new_password' => 'required|string|min:8|confirmed',
            'user_id' => 'required|numeric'
        ];
    }
}
