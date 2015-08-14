<?php

    public function export()
    {
        $out = '';
		
        $filename_prefix = 'File_name';

        // get your data from database
		/*
			SELECT ...
		*/
        foreach ($data as $item) {

            $out .=  $item->team_name."\t";
            $out .=  $item->division."\t";
            $out .=  $item->first_name."\t";
            $out .=  $item->last_name."\t";
            $out .=  $item->email."\t";
            $out .=  $item->phone."\t";
            $out .= "\n";
        }

        $filename = $filename_prefix."_".date("Y-m-d_H-i",time());

        header("Content-type: application/vnd.ms-excel");
        header("Content-Encoding: UTF-8");
        header("Content-type: text/csv; charset=UTF-8");
        header("Content-disposition: csv" . date("Y-m-d") . ".csv");
        header("Content-disposition: filename=".$filename.".csv");
        echo "\xEF\xBB\xBF"; // UTF-8 BOM
        print $out;

        exit;
    }