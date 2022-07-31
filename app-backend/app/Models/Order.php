<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Key;
use App\Models\Technician;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 'technician_id', 'key_id',
    ];

    public function key()
    {
        return $this->hasOne(Key::class);
    }

    public function technician()
    {
        return $this->hasOne(Technician::class);
    }
}
