<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateOrderRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'bail|required|string|max:255',
            'key_id' => 'required|integer|exists:keys,id',
            'technician_id' => 'required|integer|exists:technicians,id'
        ];
    }

    protected function failedValidation(\Illuminate\Contracts\Validation\Validator $validator)
    {
        $response = new \Illuminate\Http\JsonResponse([
            'success' => false,
            'error' => $validator->errors()->first()
        ], 422);

        throw new \Illuminate\Validation\ValidationException($validator, $response);
    }
}
