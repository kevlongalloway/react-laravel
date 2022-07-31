<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;



class KeyFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->firstName,
            'description' => $this->faker->text,
            'price' => rand(500000,9999999),
        ];
    }
}
