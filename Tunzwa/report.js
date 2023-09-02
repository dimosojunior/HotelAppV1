<HomeCard>
          <View style={{ width: "100%", paddingHorizontal: 22, marginTop: 14 }}>
            <View>
              <Text style={{ fontSize: 18 }}>Start Date</Text>
              <TouchableOpacity
                style={styles.inputBtn}
                onPress={handleOnPressStartDate}
              >
                <Text>{selectedStartDate}</Text>
              </TouchableOpacity>
            </View>


             <View style={styles.EndDateContainer}>
              <Text style={{ fontSize: 18 }}>End Date</Text>
              <TouchableOpacity
                style={styles.inputBtn}
                onPress={handleOnPressEndDate}
              >
                <Text>{selectedEndDate}</Text>
              </TouchableOpacity>
            </View>



            <TouchableOpacity
              onPress={() => console.log("Subimit data")}
              style={styles.submitBtn}
            >
              <Text style={{ fontSize: 20, color: "white" }}>Search</Text>
            </TouchableOpacity>
          </View>




</HomeCard>
