<?php

namespace App\Http\Requests\Models\User;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;

class IndexRequest extends FormRequest
{

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {

        return $this->user()->can('index', User::class);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'id' => 'nullable|numeric',
            'email' => 'nullable|email',
            'name' => 'nullable|string',
            'verified' => 'nullable|boolean'
        ];
    }

}
