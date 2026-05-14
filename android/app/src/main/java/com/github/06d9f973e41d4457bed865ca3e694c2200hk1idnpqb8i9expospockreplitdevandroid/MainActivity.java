package com.github.06d9f973e41d4457bed865ca3e694c2200hk1idnpqb8i9expospockreplitdevandroid;
import android.os.Bundle;
import com.getcapacitor.BridgeActivity;
import com.getcapacitor.community.database.sqlite.CapacitorSQLite;
public class MainActivity extends BridgeActivity {
    @Override public void onCreate(Bundle savedInstanceState) {
        registerPlugin(CapacitorSQLite.class);
        super.onCreate(savedInstanceState);
    }
}