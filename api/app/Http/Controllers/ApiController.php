<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Carbon\Carbon;

class ApiController extends Controller
{
    public function index(){
        return JsonResponse::create([
            'text' => 'Laravel API',
            'version' => '1.0',
            'time' => Carbon::now()->toDateTimeString()
        ]);
    }
}
